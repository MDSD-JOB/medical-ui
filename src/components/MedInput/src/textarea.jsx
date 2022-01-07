import './index.less'
import T from 'ant-design-vue/es/input/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(T.TextArea.props, defaultProps)
}
export default {
  TreeNode: { ...T.TextArea.TreeNode, name: 'MedTextAreaNode' },
  name: 'MedTextArea',
  inheritAttrs: false,
  props: selfProps({}),
  created() {
    console.log(T)
  },
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
      <a-textarea class="med-textarea-wrapper" {...TProps}>
        {bodySlots}
      </a-textarea>
    )
  }
}
