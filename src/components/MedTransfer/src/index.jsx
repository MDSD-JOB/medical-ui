import difference from 'lodash/difference'
import T from 'ant-design-vue/es/transfer'
import { MedButton } from './../../index'
import './index.less'

export default {
  name: 'MedTransfer',
  components: {
    MedButton
  },
  data() {
    return {
      mixedData: [...this.leftData, ...this.rightData], // 混合了新旧数据
      savedData: [],
      rightKeys: []
    }
  },
  props: {
    ...T.props,
    keep: {
      type: Boolean,
      default: true,
      required: false
    },
    showClear: {
      type: Boolean,
      default: false,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    showSelectAll: {
      type: Boolean,
      default: false,
      required: false
    },
    childrenType: {
      type: String,
      default: 'table'
    },
    locale: {
      type: Object,
      default: () => ({
        itemUnit: '项',
        itemsUnit: '项',
        notFoundContent: '列表为空',
        searchPlaceholder: '请输入搜索内容'
      })
    },
    tableRowKey: {
      type: String,
      default: 'key'
    },
    leftData: {
      type: Array,
      default: () => []
    },
    rightData: {
      type: Array,
      default: () => []
    },
    leftColumns: {
      type: Array,
      default: () => []
    },
    rightColumns: {
      type: Array,
      default: () => []
    },
    rowKey: {
      type: String,
      default: 'key'
    },
    dataSource: {
      type: Array,
      default: () => [],
      required: false
    }
  },
  created() {
    this.mixedData = this.unique(this.mixedData, this.rowKey)
    this.writeInRightKey()
  },
  methods: {
    writeInRightKey() {
      if (this.rightData.length) {
        this.savedData = []
        const arr = this.rightData.map(item => item[this.rowKey])
        this.rightKeys = [...arr]
      }
    },
    clear() {
      const leftArr = this.mixedData.filter(
        item => !this.rightKeys.includes(item[this.rowKey])
      )
      this.mixedData = [...leftArr]
      this.savedData = []
      this.rightKeys = []
      this.$emit('change', leftArr, [])
    },
    onChange(nextTargetKeys) {
      this.rightKeys = nextTargetKeys
      const leftArr = this.mixedData.filter(
        item => !this.rightKeys.includes(item[this.rowKey])
      )
      const rightArr = this.mixedData.filter(item =>
        nextTargetKeys.includes(item[this.rowKey])
      )
      this.savedData = rightArr

      this.$emit('change', leftArr, rightArr)
    },
    getRowSelection({ disabled, selectedKeys, itemSelectAll, itemSelect }) {
      return {
        getCheckboxProps: item => ({
          props: { disabled: disabled || item.disabled }
        }),
        onSelectAll(selected, selectedRows) {
          const treeSelectedKeys = selectedRows
            .filter(item => !item.disabled)
            .map(({ key }) => key)
          const diffKeys = selected
            ? difference(treeSelectedKeys, selectedKeys)
            : difference(selectedKeys, treeSelectedKeys)
          itemSelectAll(diffKeys, selected)
        },
        onSelect({ key }, selected) {
          itemSelect(key, selected)
        },
        selectedRowKeys: selectedKeys
      }
    },
    unique(arr, key) {
      if (!arr) return arr
      if (key === undefined) return [...new Set(arr)]
      const map = {
        string: e => e[key],
        function: e => key(e)
      }
      const fn = map[typeof key]
      const obj = arr.reduce((o, e) => ((o[fn(e)] = e), o), {})
      return Object.values(obj)
    }
  },
  render() {
    const {
      $props,
      mixedData,
      rightKeys,
      leftColumns,
      rightColumns,
      getRowSelection,
      clear,
      showClear
    } = this
    const transferProps = {
      ...$props,
      dataSource: mixedData,
      targetKeys: rightKeys
    }
    const childrenSlots = {
      children: ({
        props: {
          direction,
          filteredItems,
          selectedKeys,
          disabled: listDisabled
        },
        on: { itemSelectAll, itemSelect }
      }) => {
        return (
          <a-table
            rowKey={this.tableRowKey || this.rowKey}
            row-selection={getRowSelection({
              disabled: listDisabled,
              selectedKeys,
              itemSelectAll,
              itemSelect
            })}
            locale={{ emptyText: '暂无数据' }}
            columns={direction === 'left' ? leftColumns : rightColumns}
            direction={direction}
            data-source={filteredItems}
            size="small"
            style={{ pointerEvents: listDisabled ? 'none' : null }}
            custom-row={({ key, disabled: itemDisabled }) => ({
              on: {
                click: () => {
                  if (itemDisabled || listDisabled) return
                  itemSelect(key, !selectedKeys.includes(key))
                }
              }
            })}
          ></a-table>
        )
      },
      footer: props => {
        if (!showClear) return null
        return props.direction === 'right' ? (
          <med-button type="link" onClick={clear}>
            清空
          </med-button>
        ) : null
      }
    }

    const scopedSlots = {
      ...childrenSlots,
      ...this.$scopedSlots
    }

    return (
      <div class="med-transfer-wrapper">
        <a-transfer
          {...{
            attrs: transferProps,
            on: {
              ...this.$listeners,
              change: this.onChange
            },
            scopedSlots
          }}
          rowKey={record => record[this.rowKey]}
        />
      </div>
    )
  },
  watch: {
    leftData() {
      const rightKeys = this.rightKeys
      const oldData = this.mixedData.filter(item =>
        this.rightKeys.includes(item[this.rowKey])
      )
      this.writeInRightKey()
      this.rightKeys = rightKeys
      this.mixedData = this.unique([...oldData, ...this.leftData], this.rowKey)
    },
    rightData() {
      const oldData = this.mixedData.filter(
        item => !this.rightKeys.includes(item[this.rowKey])
      )
      this.writeInRightKey()
      this.mixedData = this.unique([...oldData, ...this.rightData], this.rowKey)
    }
  }
}
