import './index.less'
import T from 'ant-design-vue/es/form/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(T.Item.props, defaultProps)
}
export default {
  TreeNode: { ...T.Item.TreeNode, name: 'MedFormItemNode' },
  name: 'MedFormItem',
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
      <a-form-item class="med-form-item-wrapper" {...TProps}>
        {bodySlots}
      </a-form-item>
    )
  }
}
