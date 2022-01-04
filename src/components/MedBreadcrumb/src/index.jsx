import './index.less'

import T from 'ant-design-vue/es/breadcrumb/index'
export default {
  name: 'MedBreadcrumb',
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
      <a-breadcrumb
        class="med-breadcrumb-wrapper"
        {...{
          attrs: attrProps,
          scopedSlots
        }}
      >
        {bodySlots}
      </a-breadcrumb>
    )
  }
}
