import './index.less'
import T from 'ant-design-vue/es/select/index'
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
  TreeNode: { ...T.OptGroup.TreeNode, name: 'MedSelectOptGroupNode' },
  name: 'MedSelectOptGroup',
  inheritAttrs: false,
  isSelectOptGroup: true,
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
      <a-select-opt-roup class="med-select-opt-group-wrapper" {...TProps}>
        {bodySlots}
      </a-select-opt-roup>
    )
  }
}
