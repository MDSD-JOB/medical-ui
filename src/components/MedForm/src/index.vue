<template>
  <div class="med-form-wrapper">
    <a-form :form="form" @submit="onSubmit">
      <template v-if="layoutMode === 'inline'">
        <a-card :bordered="bordered">
          <a-row :gutter="gutter">
            <template v-for="(item, index) in renderDataSource">
              <field-render
                :SearchGlobalOptions="SearchGlobalOptions"
                :itemOptions="item"
                :formLayout="formLayout"
                :key="item.fieldName"
                v-show="
                  index < SearchGlobalOptions.maxItem ||
                    (index >= SearchGlobalOptions.maxItem && collapsed)
                "
              />
            </template>
            <a-col
              class="search-btn-wrapper"
              :xs="24"
              :sm="24"
              :md="12"
              :lg="8"
              :xl="6"
            >
              <a-tooltip placement="bottom">
                <template slot="title">
                  <span>执行查询</span>
                </template>
                <med-button
                  type="primary"
                  :size="SearchGlobalOptions.size"
                  @click="onSubmit"
                  icon="search"
                >
                  查询
                </med-button>
              </a-tooltip>
              <a-tooltip placement="bottom">
                <template slot="title">
                  <span>清空所有控件的值</span>
                </template>
                <med-button
                  :size="SearchGlobalOptions.size"
                  style="margin-left: 8px"
                  @click="resetSearchForm"
                  icon="undo"
                >
                  重置
                </med-button>
              </a-tooltip>
              <template v-if="showCollapsedText">
                <a @click="togglecollapsed" style="margin-left: 8px">
                  <a-tooltip placement="bottom">
                    <template slot="title">
                      <span>{{
                        collapsed ? '点击收起部分控件' : '点击展开所有控件'
                      }}</span>
                    </template>
                    {{ collapsed ? '收起' : '展开' }}
                    <a-icon :type="collapsed ? 'up' : 'down'" />
                  </a-tooltip>
                </a>
              </template>
              <slot name="extra" />
            </a-col>
          </a-row>
        </a-card>
      </template>
      <template v-else>
        <a-card :bordered="bordered">
          <template v-if="searchFormFlag" v-slot:title>
            <span style="text-align:left;margin:0;">
              {{ formTitle }}
            </span>
          </template>

          <template v-if="searchFormFlag" v-slot:extra>
            <a-row>
              <slot>
                <div class="btn-wrapper">
                  <a-tooltip placement="bottom">
                    <template slot="title">
                      <span>执行查询</span>
                    </template>
                    <med-button
                      type="primary"
                      :size="SearchGlobalOptions.size"
                      @click="onSubmit"
                      icon="search"
                    >
                      查询
                    </med-button>
                  </a-tooltip>

                  <a-tooltip placement="bottom">
                    <template slot="title">
                      <span>清空所有控件的值</span>
                    </template>
                    <med-button
                      :size="SearchGlobalOptions.size"
                      style="margin-left: 8px"
                      @click="resetSearchForm"
                      icon="undo"
                    >
                      重置
                    </med-button>
                  </a-tooltip>
                </div>
              </slot>
              <template v-if="showCollapsedText">
                <a @click="togglecollapsed" style="margin-left: 8px">
                  <a-tooltip placement="bottom">
                    <template slot="title">
                      <span>{{
                        collapsed ? '点击收起部分控件' : '点击展开所有控件'
                      }}</span>
                    </template>
                    {{ collapsed ? '收起' : '展开' }}
                    <a-icon :type="collapsed ? 'up' : 'down'" />
                  </a-tooltip>
                </a>
              </template>
              <slot name="extra" />
            </a-row>
          </template>

          <a-row :gutter="gutter">
            <template v-for="(item, index) in renderDataSource">
              <template v-if="item.type && item.fieldName">
                <field-render
                  :SearchGlobalOptions="SearchGlobalOptions"
                  :itemOptions="item"
                  :key="item.fieldName"
                  :formLayout="formLayout"
                  v-show="
                    index < SearchGlobalOptions.maxItem ||
                      (index >= SearchGlobalOptions.maxItem && collapsed)
                  "
                />
              </template>
            </template>
          </a-row>
        </a-card>
      </template>
    </a-form>
    <div v-show="FieldFormFlag" class="btn-wrapper">
      <a-affix :offset-bottom="30">
        <div class="btns">
          <med-button icon="undo" htmlType="submit" @click="resetSearchForm">
            重置
          </med-button>
          <med-button icon="check-circle" htmlType="submit" @click="onSubmit">
            提交
          </med-button>
        </div>
      </a-affix>
    </div>
  </div>
</template>

<script>
import { MedButton } from './../../index'
import FieldRender from './FieldRender'
export default {
  name: 'MedForm',
  components: {
    FieldRender,
    MedButton
  },
  props: {
    // 是否是表格等搜索筛选用
    searchFormFlag: {
      type: Boolean,
      require: false,
      default: false
    },
    // 是否是新增，编辑用表单
    FieldFormFlag: {
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
          required: true,
          initialValue: '1',
          buttonType: true,
          buttonStyle: 'solid',
          optionList: [
            {
              label: 'radio选项1',
              value: '0',
              disabled: true
            },
            {
              label: 'radio选项2',
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
          optionList: [
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
          optionList: [
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
    onSubmit() {
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

<style lang="less" scoped>
@import url('./index.less');
</style>
