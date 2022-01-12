<template>
  <div class="DemoModal">
    <med-button @click="visible = true">内部展示</med-button>
    <med-s-modal
      v-model="visible"
      title="我是标题"
      @cancel="cancel"
      @submit="submit"
    >
      我是弹层内容
      <!-- <template #footer>
        <med-button>自定义按钮</med-button>
      </template> -->
    </med-s-modal>
  </div>
</template>

<script>
import { MedSModal, MedButton } from './../components'

export default {
  components: {
    MedSModal,
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
    submit() {
      this.$emit('submit')
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>
