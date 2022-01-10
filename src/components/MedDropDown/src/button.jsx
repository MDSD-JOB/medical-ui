import T from 'ant-design-vue/es/dropdown/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(T.Button.props, defaultProps)
}
export default {
  TreeNode: { ...T.Button.TreeNode, name: 'MedDropdownButtonNode' },
  name: 'MedDropdownButton',
  model: {
    ...T.Button.model
  },
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
      <a-dropdown-button class="med-dropdown-button-wrapper" {...TProps}>
        {bodySlots}
      </a-dropdown-button>
    )
  }
}
