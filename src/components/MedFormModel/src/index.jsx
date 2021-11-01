import './index.less'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import { MedButton } from './../../index'
import FieldRender from './FieldRender'
export default {
  name: 'MedFormModel',
  components: {
    FieldRender,
    MedButton
  },
  data() {
    return {
      locales: zhCN
    }
  },
  props: {
    dataSource: {
      type: Array,
      require: true,
      default: () => []
    }, // 数据源
    form: {
      type: Object,
      require: false,
      default: () => {}
    }, // 绑定的值
    responsive: {
      type: Object,
      require: false,
      default: function() {
        return {
          xl: 8,
          lg: 8,
          md: 12,
          sm: 24,
          xs: 24
        }
      }
    }, // 表单栅格布局设置
    layout: {
      type: String,
      require: false
    }, // 表单布局form设置
    formLayout: {
      type: Object,
      require: false,
      default: () => ({ labelCol: { span: 6 }, wrapperCol: { span: 18 } })
    }, // 表单选项form-item设置
    showBtn: {
      type: Boolean,
      require: false,
      default: false
    }, // 展示默认按钮
    extra: {
      type: String,
      require: false,
      default: ''
    }, // 和提示文案同时出现，目前未加入到form-item
    colon: {
      type: Boolean,
      require: false,
      default: true
    }, // 冒号
    gutter: {
      type: Number,
      require: false,
      default: 0
    },
    size: {
      type: String,
      require: false,
      default: 'default'
    }
  },
  computed: {
    rules() {
      let rules = {}
      this.dataSource.forEach(item => {
        const key = item.fieldName
        const value = [
          {
            required: item['required'] || false,
            message: item['wrongMsg'] || '',
            trigger: item['trigger'] || 'change'
          },
          {
            validator: item['validator']
              ? item['validator']
              : (rule, value, callback) => {
                  callback()
                },
            trigger: item['trigger'] || 'change'
          }
        ]
        rules[key] = value
      })
      return rules
    },
    SearchGlobalOptions() {
      // 全局配置
      return {
        size: this.size,
        responsive: this.responsive,
        formLayout: this.formLayout
      }
    },
    renderDataSource() {
      // 重组传入的数据，合并全局配置，子项的配置优先全局
      return this.dataSource.map(item => {
        const obj = {
          ...this.SearchGlobalOptions,
          ...item
        }
        if (
          item &&
          'optionList' in item &&
          'fieldName' in item &&
          'disabled' in item
        ) {
          obj.optionList.forEach(el => (el['disabled'] = item['disabled']))
        }
        return obj
      })
    }
  },
  methods: {
    submit() {
      console.log(this.form)
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$emit('submit', this.form)
          return true
        } else {
          return false
        }
      })
    },
    reset() {
      this.$refs.ruleForm.resetFields()
      this.$emit('reset', null)
    },
    clear(keys) {
      const key =
        typeof keys === 'string' ? [keys] : keys instanceof Array ? keys : []
      if (key && key.length) {
        this.$refs.ruleForm.clearValidate(key)
      } else {
        this.$refs.ruleForm.clearValidate()
      }
      this.$emit('clear', null)
    },
    validateValue(keys, cb) {
      const key =
        typeof keys === 'string' ? [keys] : keys instanceof Array ? keys : []
      if (key && key.length) {
        this.$refs.ruleForm.validateField(key)
        cb && cb()
      } else {
        this.$refs.ruleForm.validate()
      }
    }
  },
  render() {
    const {
      locales,
      colon,
      layout,
      form,
      rules,
      formLayout,
      gutter,
      reset,
      submit,
      renderDataSource,
      showBtn,
      $slots
    } = this

    const footerSlots = $slots.footer ? (
      $slots.footer
    ) : showBtn ? (
      <div class="btn-wrapper">
        <med-button icon="undo" htmlType="reset" onClick={reset}>
          清空
        </med-button>
        <med-button icon="check-circle" htmlType="submit" onClick={submit}>
          提交
        </med-button>
      </div>
    ) : null

    const scopedSlots = {
      ...this.$scopedSlots
    }
    return (
      <div class="med-form-model-wrapper">
        <a-config-provider locale={locales}>
          <a-form-model
            ref="ruleForm"
            props={{
              model: form
            }}
            layout={layout}
            rules={rules}
            colon={colon}
            label-col={formLayout.labelCol}
            wrapper-col={formLayout.wrapperCol}
            {...{ scopedSlots }}
          >
            <a-row gutter={gutter}>
              {renderDataSource.map(
                item =>
                  item.type &&
                  item.fieldName && (
                    <field-render
                      form={form}
                      itemOptions={item}
                      key={item.fieldName}
                    />
                  )
              )}
              {$slots.default}
              {$slots.customItem}
            </a-row>
            {footerSlots}
          </a-form-model>
        </a-config-provider>
      </div>
    )
  }
}
