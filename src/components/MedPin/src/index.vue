<template>
  <a-card
    class="med-pin-wrapper"
    :class="{
      layoutLeft: layout === 'left',
      layoutBottom: layout === 'bottom',
      layoutBlank: layout === 'blank'
    }"
    :style="{ width, borderColor: checked ? titleBg : '' }"
    :headStyle="{ color: titleColor, backgroundColor: checked ? titleBg : '' }"
    :bodyStyle="{
      color: bodyColor,
      fontSize: bodyFontSize
    }"
    :title="layout === 'blank' ? null : title"
    :bordered="bordered"
    :loading="loading"
    :hoverable="hoverable"
    @click="onClick"
  >
    <div v-if="layout === 'blank'">
      <a-statistic :value="num" suffix="分" style="margin-right: 50px">
      </a-statistic>
      <p href="javascript:;">床评分</p>
      <div
        class="badge"
        :style="{ color: titleColor, backgroundColor: titleBg }"
      >
        一级
      </div>
    </div>
    <div v-else>{{ num }}</div>
    <span v-if="layout === 'top'" slot="extra">{{ unit }}</span>
    <slot />
  </a-card>
</template>
<script>
export default {
  name: 'MedPin',
  props: {
    // 布局， top/left/bottom/blank
    layout: {
      type: String,
      required: false,
      default: 'top'
    },
    // 宽度
    width: {
      type: String,
      required: false,
      default: null
    },
    //标题
    title: {
      type: String,
      required: false,
      default: null
    },
    // 单位（仅在layout为top时展示）
    unit: {
      type: String,
      required: false,
      default: null
    },
    // 数据
    num: {
      type: String,
      required: false,
      default: null
    },
    // 数据字体大小
    bodyFontSize: {
      type: String,
      required: false,
      default: '28px'
    },
    // 数据字体颜色
    bodyColor: {
      type: String,
      required: false,
      default: null
    },
    // 是否展示边框和标题自定义背景色
    checked: {
      type: Boolean,
      required: false,
      default: false
    },
    // 边框
    bordered: {
      type: Boolean,
      required: false,
      default: true
    },
    //标题字体颜色
    titleColor: {
      type: String,
      required: false,
      default: '#1a7fc8'
    },
    //标题背景色
    titleBg: {
      type: String,
      required: false,
      default: null
    },
    // 骨架
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
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
