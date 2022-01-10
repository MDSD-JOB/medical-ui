import T from 'ant-design-vue/es/card/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(T.Meta.props, defaultProps)
}
export default {
  TreeNode: { ...T.Meta.TreeNode, name: 'MedCardMetaNode' },
  name: 'MedCardMeta',
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
      <a-card-meta class="med-card-meta-wrapper" {...TProps}>
        {bodySlots}
      </a-card-meta>
    )
  }
}
