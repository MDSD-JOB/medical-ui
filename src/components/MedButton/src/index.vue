<template>
  <a-button
    id="med-button-wrapper"
    v-bind="$props"
    :class="{ 'med-button-active': active }"
    :disabled="disabled"
    :htmlType="htmlType"
    :style="{
      background: bg,
      color: color,
      borderColor: bg,
      width: width,
      height: height
    }"
    @click="handleClick"
  >
    <div v-show="!icon && cusIcon" class="icon-slot">
      <img :src="cusIcon" alt="" />
    </div>
    <slot />
  </a-button>
</template>

<script>
import T from 'ant-design-vue/es/button/button'
import { debounce } from 'lodash'
export default {
  name: 'MedButton',
  props: {
    ...T.props,
    active: {
      type: Boolean,
      required: false,
      default: false
    },
    cusIcon: {
      type: String,
      required: false,
      default: null
    },
    width: {
      type: String,
      required: false,
      default: null
    },
    height: {
      type: String,
      required: false,
      default: null
    },
    bg: {
      type: String,
      required: false,
      default: null
    },
    color: {
      type: String,
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    htmlType: {
      type: String,
      required: false,
      default: 'button'
    },
    timeout: {
      type: Number,
      required: false,
      default: 0
    }
  },
  methods: {
    handleClick() {
      const _this = this
      debounce(evt => _this.$emit('click', evt), _this.timeout, true)()
    }
  }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
