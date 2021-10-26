import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import { MedButton } from './../../index'
import FieldRender from './FieldRender'
import './index.less'

export default {
  name: 'MedForm',
  components: {
    FieldRender,
    MedButton
  },
  props: {
    dataSource: {
      type: Array,
      require: true,
      default: () => []
    }, // 数据源
    formLayout: {
      type: Object,
      require: false,
      default: () => ({ labelCol: { span: 6 }, wrapperCol: { span: 18 } })
    }, // 表单选项form-item设置
    colon: {
      type: Boolean,
      require: false,
      default: true
    }, // 冒号
    layout: {
      type: String,
      require: false,
      default: 'inline'
    }, // 卡片式还是行内联

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
    }, //  控件的栅格尺寸
    formTitle: {
      type: String,
      require: false,
      default: '搜索条件'
    }, // layout = 'card' 时展示，标题
    maxItem: {
      type: Number,
      require: false,
      default: 4
    }, // 超过多少个折叠
    bordered: {
      type: Boolean,
      require: false,
      default: false
    }, // 是否显示边框
    datetimeTotimeStamp: {
      type: Boolean,
      require: false,
      default: false
    }, // 是否把时间控件的返回值全部转为时间戳,暂不启用
    gutter: {
      type: Number,
      require: false,
      default: 0
    }, // 控件的间距
    size: {
      type: String,
      require: false,
      default: 'default'
    } //  控件的尺寸
  },
  data() {
    return {
      form: this.$form.createForm(this),
      locales: zhCN,
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
        size: this.size,
        maxItem: this.maxItem,
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
        // if (this.datetimeTotimeStamp) {
        //   if (
        //     Object.prototype.toString.call(value) === '[object Object]' &&
        //     value._isAMomentObject
        //   ) {
        //     value = value.valueOf()
        //   }
        //   if (
        //     Array.isArray(value) &&
        //     value[0]._isAMomentObject &&
        //     value[1]._isAMomentObject
        //   ) {
        //     // 判断moment
        //     value = value.map(item => item.valueOf())
        //   }
        // }
        // 若是为字符串则清除两边空格
        if (value && typeof value === 'string') {
          value = value.trim()
        }
        tempObj[key] = value
      }

      return tempObj
    },
    submit() {
      this.form.validateFields((err, values) => {
        if (!err) {
          if (
            this.$listeners.callBackFormat &&
            typeof this.$listeners.callBackFormat === 'function'
          ) {
            let formatData = this.$listeners.callBackFormat(values)
            this.$emit('submit', formatData)
          } else {
            const queryParams = this.handleParams(values)
            this.$emit('submit', queryParams)
          }
        }
      })
    },
    reset() {
      // 清空整个搜索表单
      this.form.resetFields()
      this.$emit('reset', null)
    }
  },
  render() {
    const {
      form,
      SearchGlobalOptions,
      locales,
      colon,
      bordered,
      gutter,
      collapsed,
      formLayout,
      showCollapsedText,
      renderDataSource,
      layoutMode,
      togglecollapsed,
      formTitle,
      reset,
      submit,
      $slots
    } = this

    const titleSlots = {
      title: () => {
        return this.$slots.title ? (
          this.$slots.title
        ) : layoutMode === 'card' ? (
          <span style="text-align:left;margin:0;">{formTitle}</span>
        ) : null
      }
    }

    const extraSlots = {
      extra: () => {
        return layoutMode === 'card' ? (
          <div class="btn-wrapper">
            <a-tooltip placement="bottom">
              <med-button
                type="primary"
                size={SearchGlobalOptions.size}
                onClick={submit}
              >
                搜索
              </med-button>
            </a-tooltip>
            <a-tooltip placement="bottom">
              <med-button
                size={SearchGlobalOptions.size}
                style="margin-left: 8px"
                onClick={reset}
              >
                清空
              </med-button>
            </a-tooltip>
            {showCollapsedText ? (
              <a-tooltip placement="bottom">
                <med-button onClick={togglecollapsed}>
                  <a-icon type={collapsed ? 'up' : 'down'} />
                </med-button>
              </a-tooltip>
            ) : null}
          </div>
        ) : null
      }
    }

    const scopedSlots = {
      ...this.$scopedSlots
    }

    const cardScopedSlots = {
      ...titleSlots,
      ...extraSlots
    }

    return (
      <div class="med-form-wrapper">
        <a-config-provider locale={locales}>
          <a-form
            ref="ruleForm"
            colon={colon}
            form={form}
            onSubmit={submit}
            {...{ scopedSlots }}
          >
            {layoutMode === 'inline' ? (
              <a-card bordered={bordered}>
                <a-row gutter={gutter} type="flex" align="middle">
                  {renderDataSource.map((item, index) => (
                    <field-render
                      itemOptions={item}
                      formLayout={formLayout}
                      key={item.fieldName}
                      vShow={
                        index < SearchGlobalOptions.maxItem ||
                        (index >= SearchGlobalOptions.maxItem && collapsed)
                      }
                    />
                  ))}
                  {$slots.default}
                  {$slots.customItem}
                  <a-col
                    class="search-btn-wrapper"
                    xs={24}
                    sm={24}
                    md={12}
                    lg={8}
                    xl={6}
                  >
                    <med-button
                      type="primary"
                      size={SearchGlobalOptions.size}
                      onClick={submit}
                    >
                      搜索
                    </med-button>
                    <med-button
                      size={SearchGlobalOptions.size}
                      style="margin-left: 8px"
                      onClick={reset}
                    >
                      清空
                    </med-button>
                    {showCollapsedText ? (
                      <a-tooltip placement="bottom">
                        <med-button onClick={togglecollapsed}>
                          <a-icon type={collapsed ? 'up' : 'down'} />
                        </med-button>
                      </a-tooltip>
                    ) : null}
                  </a-col>
                </a-row>
              </a-card>
            ) : (
              <a-card bordered={bordered} {...{ scopedSlots: cardScopedSlots }}>
                <a-row gutter={gutter}>
                  {renderDataSource.map((item, index) => (
                    <field-render
                      SearchGlobalOptions={SearchGlobalOptions}
                      itemOptions={item}
                      formLayout={formLayout}
                      key={item.fieldName}
                      vShow={
                        index < SearchGlobalOptions.maxItem ||
                        (index >= SearchGlobalOptions.maxItem && collapsed)
                      }
                    />
                  ))}
                  {$slots.default}
                  {$slots.customItem}
                </a-row>
              </a-card>
            )}
          </a-form>
        </a-config-provider>
      </div>
    )
  }
}
