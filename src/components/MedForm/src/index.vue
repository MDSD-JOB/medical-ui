<template>
  <div class="advance-search-wrapper">
    <med-button htmlType="submit" @click="handleSubmit">提交</med-button>
  </div>
</template>

<script>
import { MedButton } from './../../index'
export default {
  name: 'MedForm',
  components: {
    MedButton
  },
  props: {
    // 是否是表格等搜索筛选用
    searchFormFlag: {
      type: Boolean,
      require: false,
      default: false
    },
    // 卡片式还是行内联
    layout: {
      type: String,
      require: false,
      default: 'card'
    },
    // searchFormFlag = ture 时展示，标题
    formTitle: {
      type: String,
      require: false,
      default: '搜索条件'
    },
    // 超过多少个折叠
    maxItem: {
      type: Number,
      require: false,
      default: 999
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
          xl: 6,
          lg: 8,
          md: 12,
          sm: 24,
          xs: 24
        }
      }
    },
    // 数据源
    dataSource: {
      type: Array,
      require: true,
      default: () => [
        {
          labelText: '输入框',
          type: 'text',
          placeholder: '文本输入区域',
          fieldName: 'formFieldText',
          required: true,
          wrongMsg: '请输入文本'
        },
        {
          labelText: '输入框',
          type: 'textarea',
          placeholder: '文本输入区域',
          fieldName: 'formFieldTextArea',
          required: true,
          wrongMsg: '请输入文本',
          autoSize: {
            minRows: 1
          }
        },
        {
          labelText: '数字输入框',
          type: 'number',
          fieldName: 'formFieldNumber',
          placeholder: '这只是一个数字的文本输入框'
        },
        {
          labelText: '单选框',
          type: 'radio',
          fieldName: 'formFieldRadio',
          initialValue: '0',
          buttonType: true,
          buttonStyle: 'solid',
          optionList: [
            {
              label: '选项1',
              value: '0',
              disabled: true
            },
            {
              label: '选项2',
              value: '1'
            }
          ]
        },
        {
          labelText: '多选框',
          type: 'checkbox',
          fieldName: 'formFieldCheckbox',
          initialValue: ['0'],
          optionList: [
            {
              label: '选项1',
              value: '0',
              disabled: true
            },
            {
              label: '选项2',
              value: '1'
            }
          ]
        },
        {
          labelText: '日期选择',
          type: 'datetime',
          fieldName: 'formField4',
          placeholder: '选择日期'
        },
        {
          labelText: '日期范围',
          type: 'datetimeRange',
          fieldName: 'formField5',
          placeholder: ['开始日期', '选择日期']
        },
        {
          labelText: '下拉框',
          type: 'select',
          fieldName: 'formField7',
          placeholder: '下拉选择你要的',
          options: [
            {
              label: 'text1',
              value: '0'
            },
            {
              label: 'text2',
              value: '1'
            }
          ]
        },
        {
          labelText: '联动',
          type: 'cascader',
          fieldName: 'formField6',
          placeholder: '级联选择',
          options: [
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                  children: [
                    {
                      value: 'xihu',
                      label: 'West Lake'
                    },
                    {
                      value: 'xiasha',
                      label: 'Xia Sha',
                      disabled: true
                    }
                  ]
                }
              ]
            },
            {
              value: 'jiangsu',
              label: 'Jiangsu',
              children: [
                {
                  value: 'nanjing',
                  label: 'Nanjing',
                  children: [
                    {
                      value: 'zhonghuamen',
                      label: 'Zhong Hua men'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  data() {
    return {
      form: this.$form.createForm(this),
      // 高级搜索 展开/关闭
      collapsed: false
    }
  },
  computed: {
    showCollapsedText() {
      return this.renderDataSource.length > this.maxItem
    },
    SearchGlobalOptions() {
      // 全局配置
      return {
        maxItem: this.maxItem,
        size: this.size,
        immediate: this.immediate,
        responsive: this.responsive
      }
    },
    renderDataSource() {
      // 重组传入的数据，合并全局配置，子项的配置优先全局
      return this.dataSource.map(item => ({
        ...this.SearchGlobalOptions,
        ...item
      }))
    },
    layoutMode() {
      if (this.layout) return this.layout
      if (this.maxItem > this.dataSource.length) {
        return 'inline'
      } else {
        return 'card'
      }
    }
  },
  methods: {
    togglecollapsed() {
      this.collapsed = !this.collapsed
    },
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
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          if (
            this.$listeners.callBackFormat &&
            typeof this.$listeners.callBackFormat === 'function'
          ) {
            let formatData = this.$listeners.callBackFormat(values)
            this.$emit('change', formatData)
          } else {
            const queryParams = this.handleParams(values)
            this.$emit('change', queryParams)
          }
        }
      })
    },
    resetSearchForm() {
      // 重置整个查询表单
      this.form.resetFields()
      this.$emit('change', null)
    }
  }
}
</script>

<style lang="less">
.advance-search-wrapper {
  .ant-card-head-wrapper {
    flex-wrap: wrap;
  }
  .ant-form-item {
    .ant-form-item-control-wrapper {
      flex: 1;
      display: inline-block;
      vertical-align: middle;
    }
    .ant-form-item-control {
      min-width: 200px;
      min-height: 32px;
      .ant-form-item-children,
      .ant-input-number,
      .ant-calendar-picker {
        max-width: 300px;
        width: 100%;
      }
    }
  }

  .table-page-search-submitButtons {
    display: block;
    margin-bottom: 24px;
    white-space: nowrap;
  }
  .btn-wrapper {
    min-width: 300px;
    text-align: right;
  }
}
</style>
