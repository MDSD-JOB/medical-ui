import './index.less'

import T from 'ant-design-vue/es/breadcrumb/BreadcrumbItem.js'
export default {
  name: 'MedBreadcrumbItem',
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
      <a-breadcrumb-item
        class="med-breadcrumb-item-wrapper"
        {...{
          attrs: attrProps,
          scopedSlots
        }}
      >
        {bodySlots}
      </a-breadcrumb-item>
    )
  }
}
