import { MedRadio, MedCheckbox } from './../../index'
export default {
  name: 'FieldRender',
  components: {
    MedRadio,
    MedCheckbox
  },
  props: {
    form: Object,
    itemOptions: Object
  },
  methods: {
    selectFilterOption(input, option) {
      // 下拉框过滤函数
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      )
    },
    cascaderFilter(inputValue, path) {
      // 级联过滤函数
      return path.some(
        option =>
          option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
      )
    }
  },
  render(createElement) {
    const {
      form,
      itemOptions,
      itemOptions: {
        responsive,
        fieldName,
        type,
        labelText,
        formLayout,
        hasFeedback,
        disabled,
        format,
        valueFormat,
        showTime,
        optionList,
        customRender,
        change
      },
      cascaderFilter,
      selectFilterOption
    } = this
    const changeEvent = disabled ? () => {} : change
    // INPUT 输入框
    const INPUT =
      fieldName && type === 'text' ? (
        <a-input
          vModel={form[fieldName]}
          {...{
            attrs: itemOptions,
            on: {
              change: changeEvent
            }
          }}
        />
      ) : null
    // TEXTAREA 输入框
    const TEXTAREA =
      fieldName && type === 'textarea' ? (
        <a-textarea
          vModel={form[fieldName]}
          {...{
            attrs: itemOptions,
            on: {
              change: changeEvent
            }
          }}
        />
      ) : null
    // number 输入框
    const NUMBER =
      fieldName && type === 'number' ? (
        <a-input-number
          vModel={form[fieldName]}
          {...{
            attrs: itemOptions,
            on: {
              change: changeEvent
            }
          }}
        />
      ) : null
    // radio 单选框
    const RADIO = (
      <med-radio
        isFormModelItem
        form={form}
        {...{
          attrs: itemOptions
        }}
      />
    )
    // checkbox 多选框
    const CHECKBOX = (
      <med-checkbox
        isFormModelItem
        form={form}
        {...{
          attrs: itemOptions
        }}
      />
    )
    // 日期 选择框
    const DATAPICKER =
      fieldName && type === 'datetime' ? (
        <a-date-picker
          format={
            format ? format : showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'
          }
          valueFormat={
            valueFormat
              ? valueFormat
              : showTime
              ? 'YYYY-MM-DDTHH:mm:[00][Z]'
              : 'YYYY-MM-DDT[00]:[00]:[00][Z]'
          }
          vModel={form[fieldName]}
          {...{
            attrs: itemOptions,
            on: {
              change: changeEvent
            }
          }}
        />
      ) : null
    // 时间段 选择框
    const RANGEPICKER =
      fieldName && type === 'datetimeRange' ? (
        <a-range-picker
          format={
            format
              ? format
              : showTime
              ? ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD HH:mm:ss']
              : ['YYYY-MM-DD', 'YYYY-MM-DD']
          }
          valueFormat={
            valueFormat
              ? valueFormat
              : showTime
              ? 'YYYY-MM-DDTHH:mm:[00][Z]'
              : 'YYYY-MM-DDT[00]:[00]:[00][Z]'
          }
          vModel={form[fieldName]}
          {...{
            attrs: itemOptions,
            on: {
              change: changeEvent
            }
          }}
        />
      ) : null
    // 级联 选择框
    const CASCADER =
      fieldName && type === 'cascader' ? (
        <a-cascader
          vModel={form[fieldName]}
          showSearch={{ cascaderFilter }}
          {...{
            attrs: itemOptions,
            on: {
              change: changeEvent
            }
          }}
        />
      ) : null
    // select 选择框
    const SELECT =
      fieldName && type === 'select' ? (
        <a-select
          allowClear
          showSearch
          filterOption={selectFilterOption}
          vModel={form[fieldName]}
          {...{
            attrs: itemOptions,
            on: {
              change: changeEvent
            }
          }}
        >
          {optionList &&
            optionList.map((item, index) => {
              return (
                <a-select-option value={item.value} key={index}>
                  {item.label}
                </a-select-option>
              )
            })}
        </a-select>
      ) : null
    // treeSelect 选择框
    const TREESELECT =
      fieldName && type === 'treeSelect' ? (
        <a-tree-select
          allowClear
          tree-data={optionList}
          vModel={form[fieldName]}
          {...{
            attrs: itemOptions,
            on: {
              change: changeEvent
            }
          }}
        />
      ) : null
    // 滑动 输入条
    const SLIDER =
      fieldName && type === 'slider' ? (
        <a-slider
          vModel={form[fieldName]}
          {...{
            attrs: itemOptions,
            on: {
              change: changeEvent
            }
          }}
        />
      ) : null
    // 评分
    const RATE =
      fieldName && type === 'rate' ? (
        <a-rate
          vModel={form[fieldName]}
          {...{
            attrs: itemOptions,
            on: {
              change: changeEvent
            }
          }}
        />
      ) : null
    // 开关
    const SWITCH =
      fieldName && type === 'switch' ? (
        <a-switch
          vModel={form[fieldName]}
          {...{
            attrs: itemOptions,
            on: {
              change: changeEvent
            }
          }}
        />
      ) : null

    const CUSTOM =
      fieldName && type === 'custom' ? customRender(createElement) : null

    const isNormal =
      fieldName && type && type !== 'radio' && type !== 'checkbox'
    const RenderSpecial =
      fieldName && type === 'radio' ? (
        <a-col
          {...{
            attrs: responsive
          }}
        >
          {RADIO}
        </a-col>
      ) : fieldName && type === 'checkbox' ? (
        <a-col
          {...{
            attrs: responsive
          }}
        >
          {CHECKBOX}
        </a-col>
      ) : null
    const isSpecical =
      fieldName &&
      (type === 'radio' || type === 'checkbox') &&
      Array.isArray(optionList)
        ? RenderSpecial
        : null
    return isNormal ? (
      <a-col
        {...{
          attrs: responsive
        }}
      >
        <a-form-model-item
          label={labelText}
          label-col={formLayout.labelCol}
          wrapper-col={formLayout.wrapperCol}
          has-feedback={hasFeedback}
          prop={disabled ? null : fieldName}
        >
          {INPUT}
          {TEXTAREA}
          {NUMBER}
          {DATAPICKER}
          {RANGEPICKER}
          {CASCADER}
          {SELECT}
          {TREESELECT}
          {SLIDER}
          {RATE}
          {SWITCH}
          {CUSTOM}
        </a-form-model-item>
      </a-col>
    ) : (
      isSpecical
    )
  }
}
