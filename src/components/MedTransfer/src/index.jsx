import T from 'ant-design-vue/es/transfer'
import './index.less'
import difference from 'lodash/difference'
export default {
  name: 'MedTransfer',
  model: {
    prop: 'targetKeys',
    event: 'change'
  },
  props: {
    ...T.props,
    disabled: {
      type: Boolean,
      default: false,
      retuired: false
    },
    showSelectAll: {
      type: Boolean,
      default: false,
      retuired: false
    },
    childrenType: {
      type: String,
      default: 'table'
    },
    leftColumns: {
      type: Array,
      default: () => []
    },
    rightColumns: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onChange(nextTargetKeys) {
      this.$emit('change', nextTargetKeys)
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
    }
  },
  render() {
    const { leftColumns, rightColumns, getRowSelection } = this
    const transferProps = {
      ...this.$props
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
          <div>
            <a-table
              row-selection={getRowSelection({
                disabled: listDisabled,
                selectedKeys,
                itemSelectAll,
                itemSelect
              })}
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
          </div>
        )
      }
    }

    const scopedSlots = {
      ...childrenSlots,
      ...this.$scopedSlots
    }
    const headSlots = Object.keys(this.$slots).map(slot => {
      return <template slot={slot}>{this.$slots[slot]}</template>
    })
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
        >
          {headSlots}
        </a-transfer>
      </div>
    )
  }
}
