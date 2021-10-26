<template>
  <div class="DemoPdf">
    <med-modal size="medium" v-model="visible" @cancel="visible = false">
      <med-pdf src="/1.pdf" />
    </med-modal>
    <med-button @click="visible = true">展示</med-button>
  </div>
</template>

<script>
import { MedModal, MedPdf, MedButton } from './../components'
export default {
  components: {
    MedPdf,
    MedModal,
    MedButton
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="less"></style>
