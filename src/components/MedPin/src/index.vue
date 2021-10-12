<template>
  <a-card
    id="med-pin-wrapper"
    v-bind="$props"
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
    @click="onClick"
  >
    <div v-if="layout === 'blank'">
      <a-statistic :value="num" suffix="分" style="margin-right: 50px" />
      <p>床评分</p>
      <div
        class="badge"
        :style="{ color: titleColor, backgroundColor: titleBg }"
      >
        一级
      </div>
    </div>
    <div class="flex-c-c" v-else-if="layout === 'top'">
      <span class="med-pin-input-box">
        <span class="med-pin-input-box__label">{{ lnum || '--' }}</span>
        <input
          type="number"
          class="med-pin-input-box__input"
          v-model="lnum"
          placeholder="--"
          oninput="if(value.length>3)value=value.slice(0,3)"
        />
      </span>
      <span v-show="twoNumFlag" style="position:relative;z-index:9;">/</span>
      <span class="med-pin-input-box" v-if="twoNumFlag">
        <span class="med-pin-input-box__label">{{ rnum || '--' }}</span>
        <input
          type="number"
          class="med-pin-input-box__input"
          v-model="rnum"
          placeholder="--"
          oninput="if(value.length>3)value=value.slice(0,3)"
        />
      </span>
    </div>
    <div v-else>{{ lnum }}</div>
    <span v-if="layout === 'top'" slot="extra">{{ unit }}</span>
    <slot />
  </a-card>
</template>
<script>
import T from 'ant-design-vue/es/card/Card'
export default {
  name: 'MedPin',
  data() {
    return {
      lnum: this.num,
      rnum: this.snum
    }
  },
  props: {
    ...T.props,
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
    snum: {
      type: String,
      required: false,
      default: null
    },
    twoNumFlag: {
      type: Boolean,
      required: false,
      default: false
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
