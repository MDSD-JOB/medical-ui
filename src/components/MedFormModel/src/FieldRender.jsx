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
    const CUSTOM =
      fieldName && type && customRender ? customRender(createElement) : false
    // INPUT 输入框
    const INPUT =
      fieldName && type === 'text'
        ? CUSTOM || (
            <a-input
              vModel={form[fieldName]}
              {...{
                attrs: itemOptions,
                on: {
                  change: changeEvent
                }
              }}
            />
          )
        : null
    // TEXTAREA 输入框
    const TEXTAREA =
      fieldName && type === 'textarea'
        ? CUSTOM || (
            <a-textarea
              vModel={form[fieldName]}
              {...{
                attrs: itemOptions,
                on: {
                  change: changeEvent
                }
              }}
            />
          )
        : null
    // number 输入框
    const NUMBER =
      fieldName && type === 'number'
        ? CUSTOM || (
            <a-input-number
              vModel={form[fieldName]}
              {...{
                attrs: itemOptions,
                on: {
                  change: changeEvent
                }
              }}
            />
          )
        : null
    // radio 单选框
    const RADIO =
      fieldName && type === 'radio'
        ? CUSTOM || (
            <med-radio
              isFormModelItem
              form={form}
              {...{
                attrs: itemOptions
              }}
            />
          )
        : null
    // checkbox 多选框
    const CHECKBOX =
      fieldName && type === 'checkbox'
        ? CUSTOM || (
            <med-checkbox
              isFormModelItem
              form={form}
              {...{
                attrs: itemOptions
              }}
            />
          )
        : null
    // 日期 选择框
    const DATAPICKER =
      fieldName && type === 'datetime'
        ? CUSTOM || (
            <a-date-picker
              format={
                format
                  ? format
                  : showTime
                  ? 'YYYY-MM-DD HH:mm:ss'
                  : 'YYYY-MM-DD'
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
          )
        : null
    // 时间段 选择框
    const RANGEPICKER =
      fieldName && type === 'datetimeRange'
        ? CUSTOM || (
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
          )
        : null
    // 级联 选择框
    const CASCADER =
      fieldName && type === 'cascader'
        ? CUSTOM || (
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
          )
        : null
    // select 选择框
    const SELECT =
      fieldName && type === 'select'
        ? CUSTOM || (
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
          )
        : null
    // treeSelect 选择框
    const TREESELECT =
      fieldName && type === 'treeSelect'
        ? CUSTOM || (
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
          )
        : null
    // 滑动 输入条
    const SLIDER =
      fieldName && type === 'slider'
        ? CUSTOM || (
            <a-slider
              vModel={form[fieldName]}
              {...{
                attrs: itemOptions,
                on: {
                  change: changeEvent
                }
              }}
            />
          )
        : null
    // 评分
    const RATE =
      fieldName && type === 'rate'
        ? CUSTOM || (
            <a-rate
              vModel={form[fieldName]}
              {...{
                attrs: itemOptions,
                on: {
                  change: changeEvent
                }
              }}
            />
          )
        : null
    // 开关
    const SWITCH =
      fieldName && type === 'switch'
        ? CUSTOM || (
            <a-switch
              vModel={form[fieldName]}
              {...{
                attrs: itemOptions,
                on: {
                  change: changeEvent
                }
              }}
            />
          )
        : null

    return (
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
          {RADIO}
          {CHECKBOX}
          {TREESELECT}
          {SLIDER}
          {RATE}
          {SWITCH}
        </a-form-model-item>
      </a-col>
    )
  }
}
