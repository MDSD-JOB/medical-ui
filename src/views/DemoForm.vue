<template>
  <div class="DemoForm">
    <med-form
      ref="ruleForm"
      layout="inline"
      :responsive="responsive"
      :dataSource="dataSource"
      :maxItem="4"
      @submit="submit"
    >
      <template #title>
        我是插槽标题22
      </template>
      <template #customItem>
        <a-col v-bind="responsive">
          <a-form-model-item
            label="labelText"
            prop="labelTexts"
            :labelCol="{ span: 6 }"
            :wrapperCol="{ span: 12 }"
          >
            <a-input></a-input>
          </a-form-model-item>
        </a-col>
      </template>
    </med-form>
  </div>
</template>

<script>
import { dataSource, columns, list } from './../data'
import { MedForm } from './../components'

export default {
  components: {
    MedForm
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
      dataSource,
      columns,
      list
    }
  },

  methods: {
    // 表单
    submit(data) {
      console.log('form Submit', data)
    }
  }
}
</script>
