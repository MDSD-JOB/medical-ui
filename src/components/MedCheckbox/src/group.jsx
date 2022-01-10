import T from 'ant-design-vue/es/checkbox/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(T.Group.props, defaultProps)
}
export default {
  TreeNode: { ...T.Group.TreeNode, name: 'MedCheckboxGroupNode' },
  name: 'MedCheckGroupbox',
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
      <a-checkbox-group class="med-checkbox-group-wrapper" {...TProps}>
        {bodySlots}
      </a-checkbox-group>
    )
  }
}
