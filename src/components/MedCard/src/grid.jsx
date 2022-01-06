import './index.less'
import T from 'ant-design-vue/es/card/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(T.Grid.props, defaultProps)
}
export default {
  TreeNode: { ...T.Grid.TreeNode, name: 'MedCardGridNode' },
  name: 'MedCardGrid',
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
      <a-card-grid class="med-card-grid-wrapper" {...TProps}>
        {bodySlots}
      </a-card-grid>
    )
  }
}
