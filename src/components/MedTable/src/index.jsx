import cloneDeep from 'lodash/cloneDeep'
import isEqual from 'lodash/isEqual'
import fromPairs from 'lodash/fromPairs'
import './index.less'

export default {
  name: 'MedTable',
  props: {
    // 表头
    columns: {
      type: Array,
      required: true,
      default: () => []
    },
    // 数据源
    dataSource: {
      data: Array,
      required: true,
      default: () => []
    },
    //  rowKey
    rowKey: {
      type: [Function, String],
      required: true,
      default: 'key'
    },
    // 展开的行，控制属性。可用 .sync 后缀,
    expandedRowKeys: {
      type: Array,
      default: () => []
    },
    // 自定义展开图标
    expandIcon: {
      type: Function,
      default: null
    },
    // 指定子节点列表的键名
    childrenKey: {
      type: String,
      default: 'embedChildren'
    },
    // 指定树形结构的列名（修改children为指定字段）
    childrenColumnName: {
      type: String,
      default: 'children'
    },
    // 是否展开加载
    expandLoad: {
      type: Boolean,
      default: false
    },
    // 页码
    pagination: {
      type: [Boolean, Object],
      default: true
    },
    // 表格行的类名
    rowClassName: {
      type: [Function, null],
      default: null
    },
    // 是否开启手风琴效果
    accordion: {
      type: Boolean,
      default: false
    },
    // 是否允许展开空节点
    allowExpandEmpty: {
      type: Boolean,
      default: false
    },
    preExpand: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      searchText: '',
      searchInput: null,
      computedColumns: [],
      filteredColumns: [],
      allRowKeys: [],
      // 列控制选择项
      columnOpts: [],
      // 列控制已选项
      selectedColumns: [],
      // 是否显示列控制的下拉列表
      open: false,
      currentPage: 1,
      pageChangeFlag: false,
      filteredValue: {},
      // FIXME:
      filteredIndexmap: {}
    }
  },
  computed: {
    pageSize() {
      return this.pagination?.pageSize || 10
    },
    computedPagination() {
      if (!this.pagination) return false

      return this.pagination
    },
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
    },
    computedDataSource() {
      return JSON.parse(JSON.stringify(this.dataSource))
    }
  },
  watch: {
    columns: {
      immediate: true,
      handler(columns) {
        this.initColumns()

        // 列控制相关
        this.columnOpts = []
        this.selectedColumns = []

        columns.forEach(item => {
          const { title, dataIndex, selectable } = item

          // 生成列控制选择框
          if (selectable) {
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
          ({ dataIndex, selectable }) =>
            !selectable || selectedColumns.includes(dataIndex)
        )
      }
    },
    dataSource: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          this.updateAllRowKeys()
        })
      }
    }
  },
  methods: {
    initRowKeys() {
      this.updateAllRowKeys()

      this.$emit('update:expandedRowKeys', [])
    },
    // 监听展开事件
    handleExpand(expanded, row) {
      // REVIEW: 这种index不能下钻
      const index = this.dataSource.findIndex(
        item => item[this.rowKey] === row[this.rowKey]
      )

      this.$emit('expand', expanded, row, index)
    },
    // 控制列的显示隐藏
    dropdownRender() {
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
    // 控制每行类名
    getRowClassName(record, index) {
      const rowKey = record[this.rowKey]
      const className =
        (this.rowClassName && this.rowClassName(record, index)) || ''
      return (
        (this.expandedRowKeys.includes(rowKey)
          ? 'ant-row--open'
          : 'ant-row--close') +
        ' ' +
        className
      )
    },
    updateAllRowKeys(dataSource = this.dataSource) {
      // FIXME: 无法正确处理默认排序，筛选的情形

      this.allRowKeys = dataSource
        .slice(
          (this.currentPage - 1) * this.pageSize,
          this.currentPage * this.pageSize
        )
        .filter(item => item[this.childrenKey]?.length > 0)
        .map(item => item[this.rowKey])
    },
    // 设置icon
    getExpandIcon({ expanded, record, onExpand }) {
      // REVIEW: 这种index不能下钻
      const index = this.dataSource.findIndex(
        item => item[this.rowKey] === record[this.rowKey]
      )

      const handleClick = () => {
        this.preExpand
          ? this.preExpand(expanded, record, index, onExpand.bind(this, record))
          : onExpand.call(this, record)
      }
      // 表格内嵌
      if (
        (record[this.childrenKey]?.length && this.ifHasExpanded) ||
        this.allowExpandEmpty
      ) {
        return (
          <a-icon
            class="expand-icon"
            type={expanded ? 'minus-square' : 'plus-square'}
            {...{
              on: {
                click: handleClick
              }
            }}
          />
        )
      }

      // 树状展开
      if (record[this.childrenColumnName]) {
        if (this.expandLoad || record[this.childrenColumnName].length > 0) {
          console.log(11)
          return (
            <a-icon
              class="expand-icon"
              type={expanded ? 'minus-square' : 'plus-square'}
              {...{
                on: {
                  click: handleClick
                }
              }}
            />
          )
        }
      }

      return this.expandIcon
    },
    // 分页、排序、筛选时触发
    handleChange({ current }, filters, sorter, { currentDataSource }) {
      // 翻页时如果展开项发生变化， 则后续会触发 handleExpandedRowsChange
      // 使得 expandedRowKeys 无法被清空，此处设置一个开关变量 pageChangeFlag
      if (this.currentPage !== current) {
        this.pageChangeFlag = true
        this.currentPage = current
      }

      this.$emit('update:expandedRowKeys', [])

      this.$nextTick(() => {
        this.updateAllRowKeys(currentDataSource)
      })

      // 处理限定过滤
      if (Object.keys(this.filteredValue).length) {
        Object.assign(this.filteredValue, filters)

        Object.keys(filters).forEach(key => {
          const index = this.filteredIndexmap[key]

          this.computedColumns[index].filteredValue = this.filteredValue[key]
        })
      }

      this.$emit('change', ...Array.from(arguments))
    },
    // 展开时更新 expandedRowKeys
    handleExpandedRowsChange(val) {
      // 翻页不触发展开事件
      if (this.pageChangeFlag) {
        this.pageChangeFlag = false
        return
      }

      const expandedRowKeys = this.accordion ? [val[val.length - 1]] : val
      this.$emit('update:expandedRowKeys', expandedRowKeys)
    },
    // 展开所有
    handleExpandAll() {
      const expandedRowKeys = this.ifAllExpanded ? [] : this.allRowKeys
      this.$emit('update:expandedRowKeys', expandedRowKeys)
    },
    // 初始化表头
    initColumns() {
      const columns = cloneDeep(this.columns)

      this.computedColumns = columns.map((item, index) => {
        const { dataIndex } = item

        if (item.scopedSlots && item.scopedSlots.customRender) {
          item.renderer = item.scopedSlots.customRender
        }
        // TODO: 简化格式化方式
        if (item.formatter) {
          item.customRender = (text, record, index) => {
            return {
              children: item.formatter(text, record, index),
              attrs: {}
            }
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
            filterIcon: 'filterIcon',
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
    // 搜索筛选
    handleSearch(selectedKeys, confirm) {
      confirm()
      this.searchText = selectedKeys[0]
    },
    // 重置搜索筛选
    handleReset(clearFilters) {
      clearFilters()
      this.searchText = ''
    }
  },
  render() {
    const tableProps = {
      ...this.$attrs,
      rowKey: this.rowKey,
      dataSource: this.computedDataSource,
      columns: this.filteredColumns,
      expandIcon: this.expandIcon, // || this.getExpandIcon
      expandedRowKeys: this.expandedRowKeys,
      pagination: this.pagination,
      rowClassName: this.getRowClassName,
      childrenColumnName: this.childrenColumnName
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
      filterIcon: filtered => (
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
    const expandedSlots = {}

    if (this.ifHasExpanded) {
      expandedSlots.expandedRowRender = value =>
        this.$scopedSlots.expandedRowRender?.({ value })
    }
    const scopedSlots = {
      ...tableColumnSlots,
      ...filterDropdownSlots,
      ...expandedSlots,
      ...this.$scopedSlots
    }
    const slots = Object.keys(this.$slots).map(slot => {
      return <template slot={slot}>{this.$slots[slot]}</template>
    })
    return (
      <section class="med-table-wrapper" onClick={() => (this.open = false)}>
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
                dropdownRender={this.dropdownRender}
                getPopupContainer={triggerNode => triggerNode.parentNode}
              />
            </section>
          ) : null}
        </section>

        <a-table
          class="med-table ant-table-notripped"
          {...{
            attrs: tableProps,
            on: {
              ...this.$listeners,
              expandedRowsChange: this.handleExpandedRowsChange,
              expand: this.handleExpand,
              change: this.handleChange
            },
            scopedSlots
          }}
        >
          {slots}
        </a-table>
      </section>
    )
  }
}
