import './index.less'
import T from 'ant-design-vue/es/date-picker/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(T.props, defaultProps)
}
export default {
  TreeNode: { ...T.TreeNode, name: 'MedDatePickerNode' },
  name: 'MedDatePicker',
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
      <a-date-picker class="med-date-picker-wrapper" {...TProps}>
        {bodySlots}
      </a-date-picker>
    )
  }
}
