import T from 'ant-design-vue/es/tree-select/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(T.TreeNode.props, defaultProps)
}
export default {
  TreeNode: { ...T.TreeNode.TreeNode, name: 'MedTreeSelectNodeNode' },
  name: 'MedTreeSelectNode',
  inheritAttrs: false,
  isTreeNode: true,
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
      <a-tree-select-node class="med-tree-select-node-wrapper" {...TProps}>
        {bodySlots}
      </a-tree-select-node>
    )
  }
}
