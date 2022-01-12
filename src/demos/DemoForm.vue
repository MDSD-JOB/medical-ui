<template>
  <div class="demo-form">
    <med-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <med-form-item label="Note">
        <a-input
          v-decorator="[
            'note',
            { rules: [{ required: true, message: 'Please input your note!' }] }
          ]"
        />
      </med-form-item>
      <med-form-item label="Gender">
        <a-select
          v-decorator="[
            'gender',
            {
              rules: [{ required: true, message: 'Please select your gender!' }]
            }
          ]"
          placeholder="Select a option and change input text above"
          @change="handleSelectChange"
        >
          <a-select-option value="male">
            male
          </a-select-option>
          <a-select-option value="female">
            female
          </a-select-option>
        </a-select>
      </med-form-item>
      <med-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
      </med-form-item>
    </med-form>
  </div>
</template>
<script>
import { MedForm, MedFormItem } from './../components'
export default {
  components: {
    MedForm,
    MedFormItem
  },
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleSelectChange(value) {
      console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    }
  }
}
</script>
