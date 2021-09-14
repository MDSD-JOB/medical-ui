<template>
  <a-button
    :disabled="disabled"
    :ghost="ghost"
    :htmlType="htmlType"
    :icon="icon"
    :loading="loading"
    :shape="shape"
    :size="size"
    :type="type"
    :block="block"
    @click="handleClick"
  >
    <slot />
  </a-button>
</template>
<script>
import { debounce } from 'lodash'
export default {
  name: 'MedButton',
  props: {
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
      default: null
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
