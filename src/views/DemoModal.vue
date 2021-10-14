<template>
  <div class="DemoModal">
    <med-button @click="visible = true">展示</med-button>
    <med-modal v-model="visible" title="我是标题" @cancel="cancel">
      我是弹层内容
      <template #footer>
        <med-button>自定义按钮</med-button>
      </template>
    </med-modal>
  </div>
</template>

<script>
import { MedModal, MedButton } from './../components'

export default {
  components: {
    MedModal,
    MedButton
  },
  props: {
    showModal: Boolean
  },
  data() {
    return {
      visible: this.showModal
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>
