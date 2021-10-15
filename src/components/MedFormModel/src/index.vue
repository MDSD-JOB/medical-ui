<template>
  <div class="med-form-model-wrapper">
    <a-config-provider :locale="locale">
      <a-form-model
        ref="ruleForm"
        :colon="colon"
        :layout="layout"
        :model="form"
        :rules="rules"
        :label-col="formLayout.labelCol"
        :wrapper-col="formLayout.wrapperCol"
      >
        <a-card :bordered="bordered">
          <a-row :gutter="gutter">
            <template v-for="item in renderDataSource">
              <template v-if="item.type && item.fieldName">
                <field-render
                  :form="form"
                  :itemOptions="item"
                  :key="item.fieldName"
                  :SearchGlobalOptions="SearchGlobalOptions"
                />
              </template>
            </template>
            <slot name="customItem" />
          </a-row>
        </a-card>
        <slot name="footer">
          <div class="btn-wrapper" v-if="showBtn">
            <!-- <a-affix :offset-bottom="30">  固钉 -->
            <div class="btns">
              <med-button icon="undo" htmlType="submit" @click="reset">
                重置
              </med-button>
              <med-button icon="check-circle" htmlType="submit" @click="submit">
                提交
              </med-button>
            </div>
            <!-- </a-affix> -->
          </div>
        </slot>
      </a-form-model>
    </a-config-provider>
  </div>
</template>

<script>
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
      locale: zhCN
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
    bordered: {
      type: Boolean,
      require: false,
      default: false
    },
    gutter: {
      type: Number,
      require: false,
      default: 48
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
      return this.dataSource.map(item => ({
        ...this.SearchGlobalOptions,
        ...item
      }))
    }
  },
  methods: {
    submit() {
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
    }
  }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
