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
    change(key, type) {
      this[type] = key
      this.$emit('change', key)
    }
  },
  render() {
    const { title, width, tabList, key, change, $props } = this
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
            tabChange: key => change(key, 'key')
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
