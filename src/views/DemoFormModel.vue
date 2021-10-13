<template>
  <div class="DemoFormModel">
    <med-form-model
      ref="form"
      showBtn
      :form="form"
      :dataSource="dataSource"
      :responsive="responsive"
      @submit="submit"
    >
      <template v-slot:footer="">
        <med-button @click="submitdiy">提交</med-button>
      </template>
    </med-form-model>
  </div>
</template>

<script>
import { dataSource, columns, list } from './../data'
import { MedFormModel, MedButton } from './../components'

export default {
  components: {
    MedFormModel,
    MedButton
  },
  data() {
    return {
      responsive: {
        xl: 12,
        lg: 12,
        md: 12,
        sm: 24,
        xs: 24
      },
      form: {
        name: ''
      },
      dataSource,
      columns,
      list
    }
  },
  methods: {
    // 表单
    submit(data) {
      console.log('form Submit', data)
    },
    submitdiy() {
      console.log(this.$refs.form.submit())
    }
  }
}
</script>
