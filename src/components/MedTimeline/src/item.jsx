import T from 'ant-design-vue/es/timeline/index'
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
  TreeNode: { ...T.Item.TreeNode, name: 'MedTimelineItemNode' },
  name: 'MedTimelineItem',
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
      <a-timeline-item class="med-timeline-item-wrapper" {...TProps}>
        {bodySlots}
      </a-timeline-item>
    )
  }
}
