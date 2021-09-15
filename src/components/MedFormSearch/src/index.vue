<template>
  <div class="advance-search-wrapper">
    <a-form :form="form" @submit="handleSubmit">
      <template v-if="layoutMode === 'inline'">
        <a-card :bordered="bordered">
          <a-row :gutter="gutter">
            <template v-for="(item, index) in renderDataSource">
              <field-render
                :SearchGlobalOptions="SearchGlobalOptions"
                :itemOptions="item"
                :key="item.fieldName"
                v-show="
                  index < SearchGlobalOptions.maxItem ||
                    (index >= SearchGlobalOptions.maxItem && collapsed)
                "
              />
            </template>
            <a-col class="btn-wrapper" :xs="24" :sm="24" :md="12" :lg="8">
              <a-tooltip placement="bottom">
                <template slot="title">
                  <span>执行查询</span>
                </template>
                <a-button
                  type="primary"
                  :size="SearchGlobalOptions.size"
                  @click="handleSubmit"
                  icon="search"
                >
                  查询
                </a-button>
              </a-tooltip>
              <a-tooltip placement="bottom">
                <template slot="title">
                  <span>清空所有控件的值</span>
                </template>
                <a-button
                  :size="SearchGlobalOptions.size"
                  style="margin-left: 8px"
                  @click="resetSearchForm"
                  icon="undo"
                >
                  重置
                </a-button>
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
          <template v-slot:title>
            <span style="text-align:left;margin:0;">
              {{ layoutTitle }}
            </span>
          </template>

          <template v-slot:extra>
            <a-row>
              <slot>
                <a-tooltip placement="bottom">
                  <template slot="title">
                    <span>执行查询</span>
                  </template>
                  <a-button
                    type="primary"
                    :size="SearchGlobalOptions.size"
                    @click="handleSubmit"
                    icon="search"
                  >
                    查询
                  </a-button>
                </a-tooltip>

                <a-tooltip placement="bottom">
                  <template slot="title">
                    <span>清空所有控件的值</span>
                  </template>
                  <a-button
                    :size="SearchGlobalOptions.size"
                    style="margin-left: 8px"
                    @click="resetSearchForm"
                    icon="undo"
                  >
                    重置
                  </a-button>
                </a-tooltip>
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
  </div>
</template>

<script>
import FieldRender from './FieldRender'
export default {
  name: 'MedFormSearch',
  components: {
    FieldRender
  },
  computed: {
    showCollapsedText() {
      // 显示展开搜索和收缩的判定
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
      // 展示模式优化
      if (this.layout) return this.layout
      if (this.maxItem > this.dataSource.length) {
        return 'inline'
      } else {
        return 'card'
      }
    }
  },
  props: {
    layout: {
      //搜索区域的布局
      type: String,
      default: ''
    },
    layoutTitle: {
      type: String,
      default: '搜索条件区域'
    },
    bordered: {
      // 是否显示边框
      type: Boolean,
      default: false
    },
    datetimeTotimeStamp: {
      // 是否把时间控件的返回值全部转为时间戳
      type: Boolean,
      default: false
    },
    maxItem: {
      // 超过多少个折叠
      type: Number,
      default: 4
    },
    gutter: {
      // 控件的间距
      type: Number,
      default: 48
    },
    size: {
      //  控件的尺寸
      type: String,
      default: 'default'
    },
    responsive: {
      type: Object,
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
    dataSource: {
      // 数据源
      type: Array,
      default: function() {
        return [
          {
            type: 'text', // 控件类型
            labelText: '控件名称', // 控件显示的文本
            fieldName: 'formField1',
            placeholder: '文本输入区域' // 默认控件的空值文本
          },
          {
            labelText: '数字输入框',
            type: 'number',
            fieldName: 'formField2',
            placeholder: '这只是一个数字的文本输入框'
          },
          {
            labelText: '单选框',
            type: 'radio',
            fieldName: 'formField3',
            defaultValue: '0',
            options: [
              {
                label: '选项1',
                value: '0'
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
    }
  },
  data() {
    return {
      // 高级搜索 展开/关闭
      collapsed: false
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this)
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
      // 触发表单提交，也就是搜索按钮
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
    display: block;
    margin-bottom: 12px !important;
    margin-right: 0;

    .ant-form-item-control-wrapper {
      flex: 1;
      display: inline-block;
      vertical-align: middle;
    }

    > .ant-form-item-label {
      line-height: 32px;
      padding-right: 8px;
    }
    .ant-form-item-control {
      min-width: 200px;
      height: 32px;
      line-height: 32px;
      .ant-form-item-children {
        width: 100%;
      }
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
