import './index.less'

import T from 'ant-design-vue/es/card/Card'
export default {
  name: 'MedCard',
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
    }
  },
  methods: {
    tabChange(key, type) {
      this[type] = key
      this.$emit('tabChange', key)
    }
  },
  render() {
    const { title, width, tabList, key, tabChange, $props } = this
    const scopedSlots = {
      ...this.$scopedSlots
    }
    const cardProps = {
      ...$props,
      activeTabKey: key,
      tabList: tabList
    }
    return (
      <a-card
        class="med-card-wrapper"
        {...{
          attrs: cardProps,
          on: {
            ...this.$listeners,
            tabChange: key => tabChange(key, 'key')
          },
          scopedSlots
        }}
        class={{ 'no-title': !title }}
        style={{ width }}
      >
        {this.$slots.default}
      </a-card>
    )
  }
}
