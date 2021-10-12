<template>
  <a-card
    class="med-card-wrapper"
    :class="{ 'no-title': !title }"
    :style="{ width }"
    v-bind="$props"
    :tab-list="tabList"
    :active-tab-key="key"
    @tabChange="key => onTabChange(key, 'key')"
  >
    <!-- <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template> -->
    <template v-for="slot in Object.keys($slots)" :slot="slot">
      <slot :name="slot"></slot>
    </template>
  </a-card>
</template>
<script>
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
    onTabChange(key, type) {
      this[type] = key
      this.$emit('change', key)
    }
  }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
