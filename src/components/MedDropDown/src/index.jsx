import './index.less'

import T from 'ant-design-vue/es/affix/index'
export default {
  name: 'MedAffix',
  props: {
    ...T.props
  },
  render() {
    const { $props } = this
    const affixProps = {
      ...$props
    }
    const affixSlots = Object.keys(this.$slots).map(slot => {
      return <template slot={slot}>{this.$slots[slot]}</template>
    })
    return (
      <a-affix
        class="med-affix-wrapper"
        {...{
          attrs: affixProps
        }}
      >
        {affixSlots}
      </a-affix>
    )
  }
}
