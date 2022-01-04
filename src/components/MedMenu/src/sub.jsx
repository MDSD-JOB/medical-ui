import './index.less'

import T from 'ant-design-vue/es/menu/SubMenu.js'
export default {
  name: 'MedSubMenu',
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
      <a-sub-menu
        class="med-sub-menu-wrapper"
        {...{
          attrs: attrProps,
          scopedSlots
        }}
      >
        {bodySlots}
      </a-sub-menu>
    )
  }
}
