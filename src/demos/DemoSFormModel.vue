<template>
  <div class="DemoSFormModel">
    <med-button @click="defaultVl">默认值</med-button>
    <med-button @click="getSS">获取下拉框</med-button>
    <med-button @click="setSs">禁用</med-button>
    <med-s-form-model
      showBtn
      ref="form"
      :form="form"
      :dataSource="dataSource"
      :responsive="responsive"
      @submit="submit"
    >
      <template #customItem>
        <a-col v-bind="responsive">
          <a-form-model-item
            label="自定义的控件"
            prop="labelTexts"
            :labelCol="{ span: 6 }"
            :wrapperCol="{ span: 12 }"
          >
            <a-input />
          </a-form-model-item>
        </a-col>
      </template>
      <template #footer>
        <div style="display:flex;align-items:center;justify-content:center;">
          <med-button @click="submitDiy">提交</med-button>
          <med-button @click="resetDiy">重置</med-button>
          <med-button @click="clearDiy">清除状态</med-button>
        </div>
      </template>
    </med-s-form-model>
  </div>
</template>

<script>
import { dataSource } from '../data'
import { MedSFormModel, MedButton } from '../components'

export default {
  components: {
    MedSFormModel,
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
        name: '12222',
        age: '44',
        formFieldTextArea: ''
        // formFieldRadio: '1'
      },
      dataSource,
      bool: false
    }
  },
  methods: {
    defaultVl() {
      this.$set(this.form, 'formFieldRadio', '1')
      this.$set(this.form, 'name', '1')
      this.$refs.form.validateValue(['name', 'age'])
      this.$set(this.dataSource[11], 'change', () => {
        this.getSS()
      })
    },
    setSs() {
      this.bool = !this.bool
      this.$set(this.dataSource[8], 'disabled', this.bool)
    },
    getSS() {
      this.$set(this.dataSource[12], 'optionList', [
        {
          label: 'text2221',
          value: '0'
        },
        {
          label: 'text2222',
          value: '1'
        }
      ])
    },
    validate() {
      console.log('校验啦')
    },
    // 表单
    submit(data) {
      console.log('form Submit', data)
    },
    clearDiy() {
      this.$refs.form.clear()
      // this.$refs.form.clear('name')
    },
    resetDiy() {
      this.$refs.form.reset()
    },
    submitDiy() {
      this.$refs.form.submit()
    }
  }
}
</script>
