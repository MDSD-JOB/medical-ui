import T from 'ant-design-vue/es/table/Table'
import get from 'lodash/get'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import fromPairs from 'lodash/fromPairs'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import infiniteScroll from 'vue-infinite-scroll'
import { MedButton } from '../../MedButton'
import './index.less'

export default {
  name: 'MedSTable',
  components: {
    MedButton
  },
  directives: { infiniteScroll },
  data() {
    return {
      rowClickedId: '',
      locales: zhCN,
      searchText: '', // 搜索筛选
      searchInput: null,

      filteredValue: {}, // 可选项里筛选
      filteredIndexmap: {},

      computedColumns: [],
      filteredColumns: [],

      columnOpts: [], // 列控制选择项
      selectedColumns: [], // 列控制已选项
      open: false, // 是否显示列控制的下拉列表

      needTotalList: [],

      selectedRows: [],
      selectedRowKeys: [],

      localLoading: false,
      localDataSource: [],
      localPagination: Object.assign(
        {},
        {
          showSizeChanger: true,
          onShowSizeChange: (current, pageSize) =>
            this.onSizeChange(current, pageSize),
          onChange: (page, pageSize) => this.onPageChange(page, pageSize)
        },
        this.pagination
      )
    }
  },
  props: Object.assign({}, T.props, {
    questNow: {
      type: Boolean,
      default: false
    },
    rowKey: {
      type: [String, Function],
      default: 'key'
    },
    dataSource: {
      type: Function,
      required: true
    },
    pagination: {
      type: Object,
      default: () => {}
    },
    pageNo: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    /**
     * alert: {
     *   show: true,
     *   clear: Function
     * }
     */
    alert: {
      type: [Object, Boolean],
      default: false
    },
    rowSelection: {
      type: Object,
      default: null
    },
    /** @Deprecated */
    showAlertInfo: {
      type: Boolean,
      default: false
    },
    showPagination: {
      type: String | Boolean,
      default: 'auto'
    },

    /**
     * enable page URI mode
     *
     * e.g:
     * /users/1
     * /users/2
     * /users/3?queryParam=test
     * ...
     */
    pageURI: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    infiniteHight: {
      type: String,
      default: '300px'
    },
    infiniteLoadAll: {
      type: Boolean,
      default: false
    },
    infinte: {
      type: Boolean,
      default: false
    },
    showBatch: {
      type: Boolean,
      default: false
    },
    rowClassName: Function,
    customRow: Function
  }),
  created() {
    const { pageNo } = this.$route?.params || {}
    const localPageNum =
      (this.pageURI && pageNo && parseInt(pageNo)) || this.pageNo
    this.localPagination =
      (['auto', true].includes(this.showPagination) &&
        Object.assign({}, this.localPagination, {
          pageNo: localPageNum,
          pageSize: this.pageSize
        })) ||
      false
    this.needTotalList = this.initTotalList(this.columns)
    this.questNow && this.loadData()
  },
  computed: {
    ifAllExpanded() {
      const a1 = [...this.expandedRowKeys].sort((a, b) => (a > b ? 1 : -1))

      const a2 = [...this.allRowKeys].sort((a, b) => (a > b ? 1 : -1))

      return isEqual(a1, a2)
    },
    ifHasExpanded() {
      return (
        this.$scopedSlots &&
        this.$scopedSlots.expandedRowRender &&
        this.allRowKeys.length > 0
      )
    }
  },
  watch: {
    'localPagination.pageNo'(val) {
      this.pageURI &&
        this.$router.push({
          ...this.$route,
          name: this.$route.name,
          params: Object.assign({}, this.$route.params, {
            pageNo: val
          })
        })
      this.needTotalList = this.initTotalList(this.columns)
      this.selectedRowKeys = []
      this.selectedRows = []
    },
    pageNo(val) {
      Object.assign(this.localPagination, {
        pageNo: val
      })
    },
    pageSize(val) {
      Object.assign(this.localPagination, {
        pageSize: val
      })
    },
    pagination(val) {
      Object.assign(this.localPagination, val)
    },
    columns: {
      immediate: true,
      handler(columns) {
        this.initColumns()

        // 列控制相关
        this.columnOpts = []
        this.selectedColumns = []
        columns.forEach(item => {
          const { title, dataIndex, hideAble } = item
          // 生成列控制选择框
          if (hideAble) {
            this.columnOpts.push({ title, dataIndex })
            this.selectedColumns.push(dataIndex)
          }
        })

        this.selectedColumns = [...this.selectedColumns]
      }
    },
    selectedColumns: {
      immediate: true,
      deep: true,
      handler(selectedColumns) {
        this.filteredColumns = this.computedColumns.filter(
          ({ dataIndex, hideAble }) =>
            !hideAble || selectedColumns.includes(dataIndex)
        )
      }
    }
  },
  methods: {
    clear() {
      this.loadData(null, null, null, null, true)
    },
    initColumns() {
      const columns = cloneDeep(this.columns)

      this.computedColumns = columns.map((item, index) => {
        const { dataIndex } = item

        if (item.scopedSlots && item.scopedSlots.customRender) {
          item.renderer = item.scopedSlots.customRender
        }

        if (item.formatter) {
          item.customRender = (text, record, index) => {
            return {
              children: item.formatter(text, record, index),
              attrs: {}
            }
          }
        }

        if (item.tooltip && !item.scopedSlots) {
          item.customRender = (text, record) => {
            return (
              <a-tooltip>
                <template slot="title">{record[item.tooltip]}</template>
                {String(text)}
              </a-tooltip>
            )
          }
        }

        if (item.sort) {
          if (!item.sorter) {
            // 配置默认的排序方法
            item.sorter = (a, b) => {
              if (typeof a[dataIndex] === 'number')
                return a[dataIndex] - b[dataIndex]

              return a[dataIndex] > b[dataIndex] ? 1 : -1
            }
          }
        }
        // 有限项过滤
        if (item.filters) {
          // 提供默认的过滤方法
          if (!item.onFilter) {
            // const options = item.filters?.map(item => item.value) || [];

            this.filteredValue[item.dataIndex] = []
            this.filteredIndexmap[item.dataIndex] = index
            item.filteredValue = this.filteredValue[item.dataIndex]

            // eslint-disable-next-line no-unused-vars
            item.onFilter = (value, record) => {
              return record[item.dataIndex] == value
            }
          }
        }
        // 关键词过滤
        if (item.filter) {
          item.scopedSlots = Object.assign({}, item.scopedSlots, {
            filterDropdown: 'filterDropdown',
            searchIcon: 'searchIcon',
            customRender: '_filter'
          })

          // 自动聚焦于搜索框
          item.onFilterDropdownVisibleChange = visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus()
              }, 0)
            }
          }

          // 提供默认的过滤方法
          if (!item.onFilter) {
            item.onFilter = (value, record) =>
              record[item.dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase())
          }
        }
        return item
      })
    },
    /**
     * 表格重新加载方法
     * 如果参数为 true, 则强制刷新到第一页
     * @param Boolean bool
     */
    refresh(bool = false) {
      bool &&
        (this.localPagination = Object.assign(
          {},
          {
            pageNo: 1,
            pageSize: this.pageSize
          }
        ))
      this.loadData()
    },
    handleInfiniteOnLoad() {
      if (this.infiniteLoadAll) return
      this.$emit('infinteLoad')
    },
    onSizeChange(current, pageSize) {
      this.localPagination = Object.assign(this.localPagination, {
        pageSize: pageSize
      })
    },
    onPageChange(current) {
      this.localPagination = Object.assign(this.localPagination, {
        pageNo: current
      })
    },
    /**
     * 加载数据方法
     * @param {Object} pagination 分页选项器
     * @param {Object} filters 过滤条件
     * @param {Object} sorter 排序条件
     */
    loadData(pagination, filters, sorter, obj, bool) {
      this.localLoading = true
      let parameter = Object.assign(
        {
          pageNo:
            (pagination && pagination.current) ||
            (this.showPagination && this.localPagination.pageNo) ||
            this.pageNo,
          pageSize:
            (pagination && pagination.pageSize) ||
            (this.showPagination && this.localPagination.pageSize) ||
            this.pageSize
        },
        (sorter &&
          sorter.field && {
            sortField: sorter.field
          }) ||
          {},
        (sorter &&
          sorter.order && {
            sortOrder: sorter.order
          }) ||
          {},
        {
          ...filters
        }
      )
      let result
      if (bool) {
        result = Promise.resolve({
          current: 1,
          size: 10,
          total: 0,
          records: []
        })
      } else {
        result = this.dataSource(parameter)
      }
      // 对接自己的通用数据接口需要修改下方代码中的 r.pageNo, r.totalCount, r.result
      // eslint-disable-next-line
      if (
        (typeof result === 'object' || typeof result === 'function') &&
        typeof result.then === 'function'
      ) {
        result.then(r => {
          this.localPagination =
            (this.showPagination &&
              Object.assign({}, this.localPagination, {
                total: r.total,
                pageNo: r.current,
                pageSize:
                  (pagination && pagination.size) ||
                  this.localPagination.pageSize
              })) ||
            false
          // 为防止删除数据后导致页面当前页面数据长度为 0 ,自动翻页到上一页
          if (
            r.records.length === 0 &&
            this.showPagination &&
            this.localPagination.pageNo > 1
          ) {
            this.localPagination.pageNo--
            this.loadData()
            return
          }

          // 这里用于判断接口是否有返回 r.totalCount 且 this.showPagination = true 且 pageNo 和 pageSize 存在 且 totalCount 小于等于 pageNo * pageSize 的大小
          // 当情况满足时，表示数据不满足分页大小，关闭 table 分页功能
          try {
            if (
              ['auto', true].includes(this.showPagination) &&
              r.totalCount <= r.pageNo * this.localPagination.pageSize
            ) {
              this.localPagination.hideOnSinglePage = true
            }
          } catch (e) {
            this.localPagination = false
          }
          this.localDataSource = r.records // 返回结果中的数组数据
          this.localLoading = false
        })
      }
    },
    initTotalList(columns) {
      const totalList = []
      columns &&
        columns instanceof Array &&
        columns.forEach(column => {
          if (column.needTotal) {
            totalList.push({
              ...column,
              total: 0
            })
          }
        })
      return totalList
    },
    /**
     * 用于更新已选中的列表数据 total 统计
     * @param selectedRowKeys
     * @param selectedRows
     */
    updateSelect(selectedRowKeys, selectedRows) {
      this.selectedRows = selectedRows
      this.selectedRowKeys = selectedRowKeys
      const list = this.needTotalList
      this.needTotalList = list.map(item => {
        return {
          ...item,
          total: selectedRows.reduce((sum, val) => {
            const total = sum + parseInt(get(val, item.dataIndex))
            return isNaN(total) ? 0 : total
          }, 0)
        }
      })
    },
    /**
     * 清空 table 已选中项
     */
    clearSelected() {
      if (this.rowSelection) {
        this.rowSelection.onChange([], [])
        this.updateSelect([], [])
      }
    },
    batchSelected(key) {
      this.$emit('batchOpt', key, this.selectedRowKeys)
    },
    /**
     * 处理交给 table 使用者去处理 clear 事件时，内部选中统计同时调用
     * @param callback
     * @returns {*}
     */
    renderClear(callback) {
      if (!this.showBatch && this.selectedRowKeys.length <= 0) return null
      return (
        <a
          style="margin-left: 24px"
          onClick={() => {
            callback()
            this.clearSelected()
          }}
        >
          清空
        </a>
      )
    },
    renderDelete(callback) {
      if (!this.showBatch && this.selectedRowKeys.length <= 0) return null
      return (
        <med-button
          style="margin-left: 20px;"
          bg="red"
          color="white"
          onClick={() => {
            callback()
            this.clearSelected()
          }}
        >
          删除
        </med-button>
      )
    },
    renderInvalid(callback) {
      if (!this.showBatch && this.selectedRowKeys.length <= 0) return null
      return (
        <med-button
          style="margin-left: 20px;"
          bg="#FF6600"
          color="white"
          onClick={() => {
            callback()
            this.clearSelected()
          }}
        >
          作废
        </med-button>
      )
    },
    renderExport(callback) {
      if (!this.showBatch && this.selectedRowKeys.length <= 0) return null
      return (
        <med-button
          style="margin-left: 20px;"
          onClick={() => {
            callback()
            this.clearSelected()
          }}
        >
          导出Excel
        </med-button>
      )
    },
    renderSave(callback) {
      if (!this.showBatch && this.selectedRowKeys.length <= 0) return null
      return (
        <med-button
          style="margin-left: 20px;"
          bg="#0074C0"
          color="white"
          onClick={() => {
            callback()
            this.clearSelected()
          }}
        >
          保存
        </med-button>
      )
    },
    // 渲染顶部提示
    renderAlert() {
      // 绘制统计列数据
      const needTotalItems = this.needTotalList.map(item => {
        return (
          <span style="margin-right: 12px">
            {item.title}总计{' '}
            <a style="font-weight: 600">
              {!item.customRender ? item.total : item.customRender(item.total)}
            </a>
          </span>
        )
      })
      // 绘制 清空 按钮
      const clearItem =
        typeof this.alert.clear === 'boolean' && this.alert.clear
          ? this.renderClear(this.clearSelected)
          : this.alert !== null && typeof this.alert.clear === 'function'
          ? this.renderClear(this.alert.clear)
          : null

      const deleteItem =
        typeof this.alert.delete === 'boolean' && this.alert.delete
          ? this.renderDelete(() => this.batchSelected('Delete'))
          : this.alert !== null && typeof this.alert.delete === 'function'
          ? this.renderDelete(this.alert.delete)
          : null

      const exportItem =
        typeof this.alert.export === 'boolean' && this.alert.export
          ? this.renderExport(() => this.batchSelected('Export'))
          : this.alert !== null && typeof this.alert.export === 'function'
          ? this.renderExport(this.alert.export)
          : null

      const invalidItem =
        typeof this.alert.invalid === 'boolean' && this.alert.invalid
          ? this.renderInvalid(() => this.batchSelected('Invalid'))
          : this.alert !== null && typeof this.alert.invalid === 'function'
          ? this.renderInvalid(this.alert.invalid)
          : null

      const saveItem =
        typeof this.alert.save === 'boolean' && this.alert.save
          ? this.renderSave(() => this.batchSelected('Save'))
          : this.alert !== null && typeof this.alert.saveItem === 'function'
          ? this.renderSave(this.alert.saveItem)
          : null

      const alertBool =
        (this.selectedRows.length || this.showBatch) && this.alert
      // 绘制 alert 组件
      return alertBool ? (
        <a-alert showIcon={false} style="margin-bottom: 16px">
          <template slot="message">
            <div class="flex-c-b">
              {this.$slots.msgItem ? (
                this.$slots.msgItem
              ) : (
                <span style="margin-right: 12px">
                  已选择:{' '}
                  <a style="font-weight: 600">{this.selectedRows.length}</a>
                  {needTotalItems}
                  {clearItem}
                </span>
              )}
              <div class="flex-c-e">
                {deleteItem}
                {invalidItem}
                {exportItem}
                {saveItem}
                {this.$slots.alertItem}
              </div>
            </div>
          </template>
        </a-alert>
      ) : null
    },
    // 渲染下拉框
    renderDropdown() {
      const options = this.columnOpts.map(item => ({
        label: item.title,
        value: item.dataIndex
      }))

      return (
        <section
          onClick:stop={e => {
            e.stopPropagation()
          }}
        >
          <a-checkbox-group
            class="med-table__dropdown"
            options={options}
            vModel={this.selectedColumns}
          />
        </section>
      )
    },
    // 搜索筛选
    handleSearch(selectedKeys, confirm) {
      confirm()
      this.searchText = selectedKeys[0]
    },
    // 重置搜索筛选
    handleReset(clearFilters) {
      clearFilters()
      this.searchText = ''
    },
    // 展开所有
    handleExpandAll() {
      const expandedRowKeys = this.ifAllExpanded ? [] : this.allRowKeys
      this.$emit('update:expandedRowKeys', expandedRowKeys)
    },
    defaultRowClassName(record, index) {
      let className = 'med-s-table-light-row'
      if (index % 2 === 1) className = 'med-s-table-dark-row'
      if (record[this.rowKey] === this.rowClickedId)
        className = 'med-s-table-clicked'
      return className
    },
    defaultRowClick(record, index) {
      return {
        on: {
          click: () => {
            if (record[this.rowKey] === this.rowClickedId) {
              this.rowClickedId = ''
              this.$emit('rowLock', null, null)
            } else {
              this.rowClickedId = record[this.rowKey]
              this.$emit('rowLock', record, index)
            }
          }
        }
      }
    }
  },
  render() {
    const props = {}
    const expandedSlots = {}
    const localKeys = Object.keys(this.$data)

    const showAlert =
      (typeof this.alert === 'object' &&
        this.alert !== null &&
        this.alert.show &&
        typeof this.rowSelection.selectedRowKeys !== 'undefined') ||
      this.alert
    const filterDropdownSlots = {
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
        column
      }) => {
        return (
          <section style="padding: 8px;">
            <a-input
              vAntRef={c => (this.searchInput = c)}
              placeholder={`搜索 ${column.title || column.dataIndex}`}
              value={selectedKeys[0]}
              onChange={e =>
                setSelectedKeys(e.target.value ? [e.target.value] : [])
              }
              onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
              style="width: 188px; margin-bottom: 8px; display: block;"
            />
            <a-button
              type="primary"
              icon="search"
              size="small"
              style="width: 90px; margin-right: 8px"
              onClick={() => this.handleSearch(selectedKeys, confirm)}
            >
              搜索
            </a-button>
            <a-button
              size="small"
              style="width: 90px"
              onClick={() => this.handleReset(clearFilters)}
            >
              重置
            </a-button>
          </section>
        )
      },
      searchIcon: filtered => (
        <a-icon
          type="search"
          style={{ color: filtered ? '#108ee9' : undefined }}
        />
      ),
      _filter: text => {
        if (!this.searchText) return <span>{text}</span>

        return text
          .toString()
          .split(
            new RegExp(`(?<=${this.searchText})|(?=${this.searchText})`, 'i')
          )
          .map((fragment, i) => {
            return fragment.toLowerCase() === this.searchText.toLowerCase() ? (
              <mark key={i} class="highlight">
                {fragment}
              </mark>
            ) : (
              <span>{fragment}</span>
            )
          })
      }
    }

    if (this.ifHasExpanded) {
      expandedSlots.expandedRowRender = value =>
        this.$scopedSlots.expandedRowRender?.({ value })
    }

    Object.keys(T.props).forEach(k => {
      const localKey = `local${k.substring(0, 1).toUpperCase()}${k.substring(
        1
      )}`
      if (localKeys.includes(localKey)) {
        props[k] = this[localKey]
        return props[k]
      }
      if (k === 'rowSelection') {
        if (showAlert && this.rowSelection) {
          // 如果需要使用alert，则重新绑定 rowSelection 事件
          props[k] = {
            ...this.rowSelection,
            ...{
              selectedRows: this.selectedRows,
              selectedRowKeys: this.selectedRowKeys,
              onChange: (selectedRowKeys, selectedRows) => {
                this.updateSelect(selectedRowKeys, selectedRows)
                typeof this[k].onChange !== 'undefined' &&
                  this[k].onChange(selectedRowKeys, selectedRows)
              }
            }
          }
          return props[k]
        } else if (!this.rowSelection) {
          // 如果没打算开启 rowSelection 则清空默认的选择项
          props[k] = null
          return props[k]
        }
      }
      this[k] && (props[k] = this[k])
      return props[k]
    })

    const tableProps = {
      ...props,
      columns: this.filteredColumns,
      rowClassName: this.rowClassName || this.defaultRowClassName,
      customRow: this.customRow || this.defaultRowClick
    }

    const tableColumnSlots = fromPairs(
      this.computedColumns.map(({ renderer }) => {
        return [
          renderer,
          (value, row) => {
            this.$scopedSlots[renderer]?.({ value, row })
          }
        ]
      })
    )

    const tableBodySlots = Object.keys(this.$slots).map(slot => {
      return <template slot={slot}>{this.$slots[slot]}</template>
    })

    const scopedSlots = {
      ...tableColumnSlots,
      ...filterDropdownSlots,
      ...expandedSlots,
      ...this.$scopedSlots
    }

    // 顶部信息条
    const toolbar = (
      <section class="toolbar">
        {this.$slots.toolbar}

        {this.ifHasExpanded && !this.accordion ? (
          <a-button class="toolbar__expand" onClick={this.handleExpandAll}>
            {this.ifHasExpanded ? '全部收起' : '全部展开'}
          </a-button>
        ) : null}

        {this.columnOpts.length ? (
          <section class="toolbar__select">
            <a-button
              onClick={e => {
                e.stopPropagation()
                this.open = !this.open
              }}
            >
              显示设置
              <a-icon type="down" />
            </a-button>

            <a-select
              open={this.open}
              class="toolbar__select__raw"
              mode="multiple"
              placeholder="选择要显示的列"
              dropdownRender={this.renderDropdown}
              getPopupContainer={triggerNode => triggerNode.parentNode}
            />
          </section>
        ) : null}
      </section>
    )
    // 表格主体
    const table = (
      <a-config-provider locale={this.locales}>
        <div style="position:relative;">
          <a-table
            class={
              this.infinite
                ? 'med-s-table med-s-table-thead-fixed ant-table-notripped'
                : 'med-s-table ant-table-notripped'
            }
            ref="ruleTable"
            {...{
              attrs: tableProps,
              on: {
                ...this.$listeners,
                expand: (expanded, record) => {
                  this.$emit('expand', expanded, record)
                },
                change: this.loadData
              },
              scopedSlots
            }}
          >
            {tableBodySlots}
          </a-table>
          {this.loading && !this.infiniteLoadAll ? (
            <div class="med-s-table-loading-container">
              <a-spin />
            </div>
          ) : null}
        </div>
      </a-config-provider>
    )

    const wrapper = this.infinte ? (
      <div
        class="med-s-table-infinite-container"
        style={{ height: this.infiniteHight }}
        vInfiniteScroll={this.handleInfiniteOnLoad}
        infiniteScrollDisabled={this.infiniteLoadAll}
        infiniteScrollDistance={10}
      >
        {table}
      </div>
    ) : (
      table
    )

    return (
      <section class="med-s-table-wrapper" onClick={() => (this.open = false)}>
        {this.renderAlert()}
        {toolbar}
        {wrapper}
      </section>
    )
  }
}
