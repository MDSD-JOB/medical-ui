import T from 'ant-design-vue/es/date-picker/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(T.WeekPicker.props, defaultProps)
}
export default {
  TreeNode: { ...T.WeekPicker.TreeNode, name: 'MedWeekPickerNode' },
  name: 'MedWeekPicker',
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
      <a-week-picker class="med-week-picker-wrapper" {...TProps}>
        {bodySlots}
      </a-week-picker>
    )
  }
}
