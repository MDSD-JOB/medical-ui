<template>
  <a-button
    class="med-button-wrapper"
    :class="{ 'med-button-active': active }"
    :disabled="disabled"
    :ghost="ghost"
    :htmlType="htmlType"
    :icon="icon"
    :loading="loading"
    :shape="shape"
    :size="size"
    :type="type"
    :block="block"
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
import { debounce } from 'lodash'
export default {
  name: 'MedButton',
  props: {
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
    ghost: {
      type: Boolean,
      required: false,
      default: false
    },
    htmlType: {
      type: String,
      required: false,
      default: 'button'
    },
    icon: {
      type: String,
      required: false,
      default: null
    },
    loading: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    shape: {
      type: String,
      required: false,
      default: 'round'
    },
    size: {
      type: String,
      required: false,
      default: 'default'
    },
    type: {
      type: String,
      required: false,
      default: 'default'
    },
    block: {
      type: Boolean,
      required: false,
      default: false
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
.med-button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  &.ant-btn-primary {
    color: rgb(0, 116, 193);
    border-color: rgb(168, 212, 255);
    background: none;
  }
  &.med-button-active {
    background: rgb(0, 116, 193);
    border-color: rgb(0, 116, 193);
    color: #fff;
  }
  /deep/ .icon-slot {
    display: inline-block;
    max-width: 18px;
    margin-right: 5px;
    img {
      display: block;
      width: 100%;
    }
  }
  &.ant-btn-round.ant-btn-lg {
    /deep/ .icon-slot {
      max-width: 22px;
    }
  }
  &.ant-btn-round.ant-btn-sm {
    /deep/ .icon-slot {
      max-width: 14px;
    }
  }
}
</style>
