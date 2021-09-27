<template>
  <div class="med-table-wrapper"></div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
import isEqual from 'lodash/isEqual'
export default {
  name: 'MedTable',
  props: {
    // 规定 rowKey 的值必须为 String
    rowKey: {
      type: String,
      default: 'key'
    },
    expandedRowKeys: {
      type: Array,
      default: () => []
    },
    expandIcon: {
      type: Function,
      default: null
    },
    columns: {
      type: Array,
      default: () => []
    },
    dataSource: {
      data: Array,
      default: () => []
    },
    // 指定子节点列表的键名
    childrenKey: {
      type: String,
      default: 'embedChildren'
    },
    childrenColumnName: {
      type: String,
      default: 'children'
    },
    // 是否展开加载
    expandLoad: {
      type: Boolean,
      default: false
    },
    pagination: {
      type: [Boolean, Object],
      default: true
    },
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
    handleExpand(expanded, row) {
      // REVIEW: 这种index不能下钻
      const index = this.dataSource.findIndex(
        item => item[this.rowKey] === row[this.rowKey]
      )

      this.$emit('expand', expanded, row, index)
    },
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
            class="pro-table__dropdown"
            options={options}
            vModel={this.selectedColumns}
          />
        </section>
      )
    },
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

      return ''
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
    handleExpandAll() {
      const expandedRowKeys = this.ifAllExpanded ? [] : this.allRowKeys
      this.$emit('update:expandedRowKeys', expandedRowKeys)
    },
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
    handleSearch(selectedKeys, confirm) {
      confirm()
      this.searchText = selectedKeys[0]
    },

    handleReset(clearFilters) {
      clearFilters()
      this.searchText = ''
    }
  }
}
</script>

<style lang="less" scoped></style>
