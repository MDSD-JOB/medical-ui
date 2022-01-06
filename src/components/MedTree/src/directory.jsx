import './index.less'
import T from 'ant-design-vue/es/tree/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(T.DirectoryTree.props, defaultProps)
}
export default {
  TreeNode: { ...T.DirectoryTree.TreeNode, name: 'MedDirectoryTreeNode' },
  name: 'MedDirectoryTree',
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
      <a-directory-tree class="med-directory-tree-wrapper" {...TProps}>
        {bodySlots}
      </a-directory-tree>
    )
  }
}
