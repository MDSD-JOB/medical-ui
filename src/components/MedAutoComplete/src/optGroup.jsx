import './index.less'
import T from 'ant-design-vue/es/auto-complete/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(T.OptGroup.props, defaultProps)
}
export default {
  TreeNode: { ...T.OptGroup.TreeNode, name: 'MedAutoCompleteOptGroupNode' },
  name: 'MedAutoCompleteOptGroup',
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
      <a-auto-complete-opt-group
        class="med-auto-complete-opt-group-wrapper"
        {...TProps}
      >
        {bodySlots}
      </a-auto-complete-opt-group>
    )
  }
}
