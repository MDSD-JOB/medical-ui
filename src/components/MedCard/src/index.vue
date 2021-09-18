<template>
  <a-card
    class="med-card-wrapper"
    :style="{ width }"
    :title="title"
    :bordered="bordered"
    :loading="loading"
    :hoverable="hoverable"
    :tab-list="tabList"
    :size="size"
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
export default {
  name: 'MedCard',
  data() {
    return {
      key: 'tab1'
    }
  },
  props: {
    // 宽度
    width: {
      type: String,
      required: false,
      default: '100%'
    },
    // 标题
    title: {
      type: String,
      required: false,
      default: null
    },
    // 边框
    bordered: {
      type: Boolean,
      required: false,
      default: true
    },
    // tab切换
    tabList: {
      type: Array,
      required: false,
      default: () => {}
    },
    // 尺寸
    size: {
      type: String,
      required: false,
      default: null
    },
    // 是否展示骨架屏
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    // 悬浮
    hoverable: {
      type: Boolean,
      required: false,
      default: false
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
