import T from 'ant-design-vue/es/radio/index'
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
  TreeNode: { ...T.Group.TreeNode, name: 'MedRadioGroupNode' },
  name: 'MedRadioGroup',
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
      <a-radio-group class="med-radio-group-wrapper" {...TProps}>
        {bodySlots}
      </a-radio-group>
    )
  }
}
