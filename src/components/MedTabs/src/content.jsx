import './index.less'
import T from 'ant-design-vue/es/tabs/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(T.TabContent.props, defaultProps)
}
export default {
  TreeNode: { ...T.TabContent.TreeNode, name: 'MedTabContentNode' },
  name: 'MedTabContent',
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
      <a-tab-content class="med-tab-content-wrapper" {...TProps}>
        {bodySlots}
      </a-tab-content>
    )
  }
}
