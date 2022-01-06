import './index.less'

import T from 'ant-design-vue/es/card/Card'
export default {
  name: 'MedSCard',
  data() {
    return {
      key: this.activeTabKey
    }
  },
  props: {
    ...T.props,
    // 宽度
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
  methods: {
    tabChange(key, type) {
      this[type] = key
      this.$emit('tabChange', key)
    }
  },
  render() {
    const {
      title,
      width,
      tabStyle,
      tabList,
      key,
      tabChange,
      $props,
      $scopedSlots
    } = this
    const scopedSlots = {
      ...$scopedSlots
    }
    const cardProps = {
      ...$props,
      activeTabKey: key,
      tabList: tabList
    }
    const cardBodySlots = Object.keys(this.$slots).map(slot => (
      <template slot={slot}>{this.$slots[slot]}</template>
    ))
    return (
      <a-card
        class="med-s-card-wrapper"
        {...{
          attrs: cardProps,
          on: {
            ...this.$listeners,
            tabChange: key => tabChange(key, 'key')
          },
          scopedSlots
        }}
        class={{ 'no-title': !title, tabStyle: tabStyle }}
        style={{ width }}
      >
        {cardBodySlots}
      </a-card>
    )
  }
}
