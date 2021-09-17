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
    <p>123</p>
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
.med-card-wrapper {
  /deep/ .ant-card-head {
    padding: 0;
    margin: 0 15px;
    position: relative;
    .ant-card-head-title {
      padding: 0 10px;
      margin: 10px -15px;
      border-left: 5px rgb(0, 116, 191) solid;
    }
    .ant-card-extra {
      margin: 0 -15px;
      padding: 0;
      position: absolute;
      top: 0;
      right: 0;
    }
    .ant-tabs-extra-content {
      margin-right: 30px;
      > div {
        display: flex;
      }
    }
    .ant-tabs-tab-active {
      color: rgb(0, 116, 191);
    }
    .ant-tabs-ink-bar {
      background-color: rgb(0, 116, 191);
      top: 0;
    }
  }
}
</style>
