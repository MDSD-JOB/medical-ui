import './index.less'

import T from 'ant-design-vue/es/affix/index'
export default {
  name: 'MedAffix',
  props: {
    ...T.props
  },
  render() {
    const { $props, $scopedSlots } = this
    const attrProps = {
      ...$props
    }
    const scopedSlots = {
      ...$scopedSlots
    }
    const bodySlots = Object.keys(this.$slots).map(slot => {
      return <template slot={slot}>{this.$slots[slot]}</template>
    })
    return (
      <a-affix
        class="med-affix-wrapper"
        {...{
          attrs: attrProps,
          scopedSlots
        }}
      >
        {bodySlots}
      </a-affix>
    )
  }
}
