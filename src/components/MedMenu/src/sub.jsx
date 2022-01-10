import T from 'ant-design-vue/es/menu/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(T.SubMenu.props, defaultProps)
}
export default {
  TreeNode: { ...T.SubMenu.TreeNode, name: 'MedAffixNode' },
  name: 'MedSubMenu',
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
      <a-sub-menu class="med-sub-menu-wrapper" {...TProps}>
        {bodySlots}
      </a-sub-menu>
    )
  }
}
