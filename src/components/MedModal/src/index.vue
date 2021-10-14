<template>
  <a-modal
    class="med-modal-wrapper"
    v-bind="$props"
    v-on="$listeners"
    :maskClosable="maskClosable"
    :width="customizeWidth"
    :okText="okText"
    :cancelText="cancelText"
    @ok="ok"
  >
    <template v-for="slot in Object.keys($slots)" :slot="slot">
      <slot :name="slot"></slot>
    </template>
  </a-modal>
</template>
<script>
import T from 'ant-design-vue/es/modal'
const sizeObj = { mini: '30%', small: '50%', medium: '70%', large: '90%' }
export default {
  name: 'MedModal',
  model: {
    prop: 'visible',
    event: 'change'
  },
  props: {
    ...T.props,
    okText: {
      type: String,
      default: '确认'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    // 大小设置 mini / small / medium / large
    size: {
      type: String,
      default: ''
    },
    // 宽度 520 / 650 / 750 / 900
    width: {
      type: Number,
      default: 520
    }
  },
  data() {
    return {
      customizeWidth: this.width
    }
  },
  mounted() {
    this.setWidth()
  },
  methods: {
    ok() {
      this.$emit('submit')
    },
    // 设置宽度
    setWidth() {
      Object.keys(sizeObj).forEach(key => {
        if (key === this.size) this.customizeWidth = sizeObj[key]
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
