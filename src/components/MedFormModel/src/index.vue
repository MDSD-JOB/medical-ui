<template>
  <div class="med-form-model-wrapper">
    <a-form-model
      ref="ruleForm"
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
        <div class="btn-wrapper">
          <a-affix :offset-bottom="30">
            <div class="btns">
              <med-button
                icon="undo"
                htmlType="submit"
                @click="resetSearchForm"
              >
                重置
              </med-button>
              <med-button
                icon="check-circle"
                htmlType="submit"
                @click="onSubmit"
              >
                提交
              </med-button>
            </div>
          </a-affix>
        </div>
      </slot>
    </a-form-model>
  </div>
</template>

<script>
import { MedButton } from './../../index'
import FieldRender from './FieldRender'
export default {
  name: 'MedFormModel',
  components: {
    FieldRender,
    MedButton
  },
  props: {
    form: {
      type: Object,
      require: false,
      default: () => {}
    },
    // 是否显示边框
    bordered: {
      type: Boolean,
      require: false,
      default: false
    },
    // 是否把时间控件的返回值全部转为时间戳
    datetimeTotimeStamp: {
      type: Boolean,
      require: false,
      default: false
    },
    // 控件的间距
    gutter: {
      type: Number,
      require: false,
      default: 48
    },
    //  控件的尺寸
    size: {
      type: String,
      require: false,
      default: 'default'
    },
    //  控件的栅格尺寸
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
    },
    formLayout: {
      type: Object,
      require: false,
      default: () => ({ labelCol: { span: 6 }, wrapperCol: { span: 18 } })
    },
    // 数据源
    dataSource: {
      type: Array,
      require: true,
      default: () => [
        {
          labelText: '姓名',
          type: 'text',
          placeholder: '请输入姓名',
          fieldName: 'name',
          required: true,
          wrongMsg: '请输入正确格式的姓名',
          // 校验规则，支持正则，函数等,必须callback
          validator: (rule, value, cb) => {
            if (value && value.startsWith(1)) {
              cb('不能以1开头')
            }
            cb()
          }
        }
      ]
    }
  },
  computed: {
    rules() {
      let rules = {}
      this.dataSource.forEach(item => {
        const key = item.fieldName
        const value = [
          {
            required: item['required'] || null,
            message: item['wrongMsg'] || null,
            trigger: item['trigger'] || null
          },
          {
            validator: item['validator'] || null,
            trigger: item['trigger'] || null
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
        responsive: this.responsive
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
    handleParams(obj) {
      // 判断必须为obj
      if (!(Object.prototype.toString.call(obj) === '[object Object]')) {
        return {}
      }
      let tempObj = {}
      for (let [key, value] of Object.entries(obj)) {
        if (Array.isArray(value) && value.length <= 0) continue
        if (Object.prototype.toString.call(value) === '[object Function]')
          continue

        if (this.datetimeTotimeStamp) {
          // 若是为true,则转为时间戳
          if (
            Object.prototype.toString.call(value) === '[object Object]' &&
            value._isAMomentObject
          ) {
            // 判断moment
            value = value.valueOf()
          }
          if (
            Array.isArray(value) &&
            value[0]._isAMomentObject &&
            value[1]._isAMomentObject
          ) {
            // 判断moment
            value = value.map(item => item.valueOf())
          }
        }
        // 若是为字符串则清除两边空格
        if (value && typeof value === 'string') {
          value = value.trim()
        }
        tempObj[key] = value
      }

      return tempObj
    },
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$emit('submit', this.form)
        } else {
          // console.error('error submit!!')
          return false
        }
      })
    },
    resetSearchForm() {
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
