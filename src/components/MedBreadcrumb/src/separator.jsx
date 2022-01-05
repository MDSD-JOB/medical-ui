import './index.less'
import T from 'ant-design-vue/es/breadcrumb/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(T.Separator.props, defaultProps)
}
export default {
  TreeNode: { ...T.Separator.TreeNode, name: 'MedBreadcrumbSeparatorNode' },
  name: 'MedBreadcrumbSeparator',
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
      <a-breadcrumb-separator
        class="med-breadcrumb-separator-wrapper"
        {...TProps}
      >
        {bodySlots}
      </a-breadcrumb-separator>
    )
  }
}
