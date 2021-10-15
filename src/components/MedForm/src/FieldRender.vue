<template>
  <!-- input 输入框 -->
  <a-col
    v-bind="itemOptions.responsive"
    v-if="itemOptions.fieldName && itemOptions.type === 'text'"
  >
    <a-form-item
      :label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol"
      :label="itemOptions.labelText"
    >
      <a-input v-bind="{ ...itemOptions }" v-decorator="decorator" />
    </a-form-item>
  </a-col>
  <!-- textarea 输入框 -->
  <a-col
    v-bind="itemOptions.responsive"
    v-else-if="itemOptions.fieldName && itemOptions.type === 'textarea'"
  >
    <a-form-item
      :label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol"
      :label="itemOptions.labelText"
    >
      <a-textarea v-bind="{ ...itemOptions }" v-decorator="decorator" />
    </a-form-item>
  </a-col>
  <!-- number 输入框 -->
  <a-col
    v-else-if="itemOptions.fieldName && itemOptions.type === 'number'"
    v-bind="itemOptions.responsive"
  >
    <a-form-item
      :label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol"
      :label="itemOptions.labelText"
    >
      <a-input-number
        v-bind="{ ...itemOptions }"
        v-decorator="decorator"
        :placeholder="itemOptions.placeholder"
      />
    </a-form-item>
  </a-col>
  <!-- radio 单选框 -->
  <a-col
    v-bind="itemOptions.responsive"
    v-else-if="
      itemOptions.fieldName &&
        itemOptions.type === 'radio' &&
        Array.isArray(itemOptions.optionList)
    "
  >
    <med-radio
      isFormItem
      v-bind="{ ...itemOptions }"
      :formLayout="formLayout"
      :decorator="decorator"
    />
  </a-col>
  <!-- checkbox 多选框 -->
  <a-col
    v-bind="itemOptions.responsive"
    v-else-if="
      itemOptions.fieldName &&
        itemOptions.type === 'checkbox' &&
        Array.isArray(itemOptions.optionList)
    "
  >
    <med-checkbox
      isFormItem
      v-bind="{ ...itemOptions }"
      :formLayout="formLayout"
      :decorator="decorator"
    />
  </a-col>
  <!-- 日期 选择框 -->
  <a-col
    v-bind="itemOptions.responsive"
    v-else-if="itemOptions.fieldName && itemOptions.type === 'datetime'"
  >
    <a-form-item
      :label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol"
      :label="itemOptions.labelText"
    >
      <a-date-picker
        :format="itemOptions.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'"
        :valueFormat="
          itemOptions.datetimeTotimeStamp
            ? null
            : itemOptions.showTime
            ? 'YYYY-MM-DD HH:mm:ss'
            : 'YYYY-MM-DD'
        "
        v-bind="{ ...itemOptions }"
        :placeholder="itemOptions.placeholder"
        v-decorator="decorator"
      />
    </a-form-item>
  </a-col>
  <!-- 时间段 选择框 -->
  <a-col
    v-bind="itemOptions.responsive"
    v-else-if="itemOptions.fieldName && itemOptions.type === 'datetimeRange'"
  >
    <a-form-item
      :label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol"
      :label="itemOptions.labelText"
    >
      <a-range-picker
        :format="
          itemOptions.showTime
            ? ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD HH:mm:ss']
            : ['YYYY-MM-DD', 'YYYY-MM-DD']
        "
        :valueFormat="
          itemOptions.datetimeTotimeStamp
            ? null
            : itemOptions.showTime
            ? 'YYYY-MM-DD HH:mm:ss'
            : 'YYYY-MM-DD'
        "
        v-bind="{ ...itemOptions }"
        v-decorator="decorator"
        :placeholder="itemOptions.placeholder"
      />
    </a-form-item>
  </a-col>
  <!-- 级联 选择框 -->
  <a-col
    v-bind="itemOptions.responsive"
    v-else-if="itemOptions.fieldName && itemOptions.type === 'cascader'"
  >
    <a-form-item
      :label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol"
      :label="itemOptions.labelText"
    >
      <a-cascader
        v-bind="{ ...itemOptions }"
        :optionList="itemOptions.optionList"
        :showSearch="{ cascaderFilter }"
        v-decorator="decorator"
        :placeholder="itemOptions.placeholder"
      />
    </a-form-item>
  </a-col>
  <!-- select 选择框 -->
  <a-col
    v-bind="itemOptions.responsive"
    v-else-if="itemOptions.fieldName && itemOptions.type === 'select'"
  >
    <a-form-item
      :label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol"
      :label="itemOptions.labelText"
    >
      <a-select
        showSearch
        :filterOption="selectFilterOption"
        :size="itemOptions.size ? itemOptions.size : 'default'"
        allowClear
        v-decorator="decorator"
        :placeholder="itemOptions.placeholder"
      >
        <template v-for="(item, index) in itemOptions.optionList">
          <a-select-option :value="item.value" :key="index">
            {{ item.label }}
          </a-select-option>
        </template>
      </a-select>
    </a-form-item>
  </a-col>
  <!-- 滑动 输入条 -->
  <a-col
    v-bind="itemOptions.responsive"
    v-else-if="itemOptions.fieldName && itemOptions.type === 'slider'"
  >
    <a-form-item
      :label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol"
      :label="itemOptions.labelText"
    >
      <a-slider v-bind="{ ...itemOptions }" v-decorator="decorator" />
    </a-form-item>
  </a-col>
  <!-- 评分 -->
  <a-col
    v-bind="itemOptions.responsive"
    v-else-if="itemOptions.fieldName && itemOptions.type === 'rate'"
  >
    <a-form-item
      :label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol"
      :label="itemOptions.labelText"
    >
      <a-rate v-bind="{ ...itemOptions }" v-decorator="decorator" />
    </a-form-item>
  </a-col>
</template>

<script>
import { MedRadio, MedCheckbox } from './../../index'
export default {
  name: 'FieldRender',
  components: {
    MedRadio,
    MedCheckbox
  },
  data() {
    return {
      decorator: []
    }
  },
  props: {
    formLayout: Object,
    itemOptions: {
      type: Object,
      default: () => ({
        label: '控件名称',
        type: 'text',
        initialValue: '',
        value: '',
        placeholder: '',
        validator: (rule, value, callback) => {
          callback()
        }
      })
    }
  },
  created() {
    this.decorator = [
      this.itemOptions['fieldName'],
      {
        initialValue: this.itemOptions['initialValue'],
        rules: [
          {
            required: this.itemOptions['required'],
            message: this.itemOptions['wrongMsg']
          },
          {
            validator: this.validator
          }
        ]
      }
    ]
  },
  methods: {
    validator(rule, value, callback) {
      this.itemOptions['validator']
        ? this.itemOptions['validator'](rule, value, callback)
        : callback()
    },
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
  watch: {
    itemOptions: {
      deep: true,
      handler(n) {
        this.$nextTick(() => {
          this.decorator = [
            n['fieldName'],
            {
              initialValue: n['initialValue'],
              rules: [
                { required: n['required'], message: n['wrongMsg'] },
                {
                  validator: this.validator
                }
              ]
            }
          ]
        })
      }
    }
  }
}
</script>
