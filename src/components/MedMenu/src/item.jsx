import './index.less'

import T from 'ant-design-vue/es/menu/MenuItem.js'
export default {
  name: 'MedMenuItem',
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
      <a-menu-item
        class="med-menu-item-wrapper"
        {...{
          attrs: attrProps,
          scopedSlots
        }}
      >
        {bodySlots}
      </a-menu-item>
    )
  }
}
