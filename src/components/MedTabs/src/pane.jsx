import T from 'ant-design-vue/es/tabs/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(T.TabPane.props, defaultProps)
}
export default {
  TreeNode: { ...T.TabPane.TreeNode, name: 'MedTabPaneNode' },
  name: 'MedTabPane',
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
      <a-tab-pane class="med-tab-pane-wrapper" {...TProps}>
        {bodySlots}
      </a-tab-pane>
    )
  }
}
