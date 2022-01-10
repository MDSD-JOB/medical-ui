import T from 'ant-design-vue/es/auto-complete/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(T.Option.props, defaultProps)
}
export default {
  TreeNode: { ...T.Option.TreeNode, name: 'MedAutoCompleteOptionNode' },
  name: 'MedAutoCompleteOption',
  inheritAttrs: false,
  isSelectOption: true,
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
      <a-auto-complete-option
        class="med-auto-complete-option-wrapper"
        {...TProps}
      >
        {bodySlots}
      </a-auto-complete-option>
    )
  }
}
