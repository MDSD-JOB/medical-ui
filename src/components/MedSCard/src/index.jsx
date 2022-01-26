import './index.less'

import T from 'ant-design-vue/es/card/Card'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(
    {
      ...T.props,
      width: {
        type: String,
        required: false,
        default: '100%'
      },
      tabStyle: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    defaultProps
  )
}
export default {
  TreeNode: { ...T.TreeNode, name: 'MedSCardNode' },
  name: 'MedSCard',
  inheritAttrs: false,
  props: selfProps({}),
  methods: {
    tabChange(key) {
      this.$emit('tabChange', key)
    }
  },
  render() {
    const { title, width, tabStyle, tabChange, $attrs, $scopedSlots } = this
    const TProps = {
      props: getOptionProps(this),
      on: {
        ...getListeners(this),
        tabChange: tabChange
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
      <a-card
        class={{
          'med-s-card-wrapper': true,
          'no-title': !title,
          tabStyle: tabStyle
        }}
        style={{ width }}
        {...TProps}
      >
        {bodySlots}
      </a-card>
    )
  }
}
