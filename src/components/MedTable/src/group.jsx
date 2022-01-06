import './index.less'
import T from 'ant-design-vue/es/table/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(T.ColumnGroup.props, defaultProps)
}
export default {
  TreeNode: { ...T.ColumnGroup.TreeNode, name: 'MedTableColumnGroupNode' },
  name: 'MedTableColumnGroup',
  inheritAttrs: false,
  props: selfProps({}),
  render() {
    const { $attrs, $scopedSlots } = this
    const TProps = {
      props: getOptionProps(this),
      on: {
        ...getListeners(this)
      },
      attrs: $attrs,
      class: getClass(this),
      style: getStyle(this),
      scopedSlots: $scopedSlots
    }
    const bodySlots = Object.keys(this.$slots).map(slot => {
      if (slot === 'default') return this.$slots[slot]
      return <template slot={slot}>{this.$slots[slot]}</template>
    })
    return (
      <a-table-column-group class="med-table-column-group-wrapper" {...TProps}>
        {bodySlots}
      </a-table-column-group>
    )
  }
}
