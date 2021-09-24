<template>
  <!-- input 输入框 -->
  <a-col
    v-bind="itemOptions.responsive"
    v-if="itemOptions.fieldName && itemOptions.type === 'text'"
  >
    <a-form-model-item :label="itemOptions.labelText">
      <a-input v-model="form[itemOptions.fieldName]" />
    </a-form-model-item>
  </a-col>
  <!-- textarea 输入框 -->
  <a-col
    v-bind="itemOptions.responsive"
    v-else-if="itemOptions.fieldName && itemOptions.type === 'textarea'"
  >
    <a-form-model-item :label="itemOptions.labelText">
      <a-textarea v-bind="{ ...itemOptions }" v-decorator="decorator" />
    </a-form-model-item>
  </a-col>
  <!-- number 输入框 -->
  <a-col
    v-else-if="itemOptions.fieldName && itemOptions.type === 'number'"
    v-bind="itemOptions.responsive"
  >
    <a-form-model-item :label="itemOptions.labelText">
      <a-input-number
        v-bind="{ ...itemOptions }"
        v-decorator="decorator"
        :placeholder="itemOptions.placeholder"
      />
    </a-form-model-item>
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
    <a-form-model-item :label="itemOptions.labelText">
      <a-date-picker
        v-bind="{ ...itemOptions }"
        :format="itemOptions.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'"
        :placeholder="itemOptions.placeholder"
        v-decorator="decorator"
      />
    </a-form-model-item>
  </a-col>
  <!-- 时间段 选择框 -->
  <a-col
    v-bind="itemOptions.responsive"
    v-else-if="itemOptions.fieldName && itemOptions.type === 'datetimeRange'"
  >
    <a-form-model-item :label="itemOptions.labelText">
      <a-range-picker
        v-bind="{ ...itemOptions }"
        v-decorator="decorator"
        :placeholder="itemOptions.placeholder"
      />
    </a-form-model-item>
  </a-col>
  <!-- 级联 选择框 -->
  <a-col
    v-bind="itemOptions.responsive"
    v-else-if="itemOptions.fieldName && itemOptions.type === 'cascader'"
  >
    <a-form-model-item :label="itemOptions.labelText">
      <a-cascader
        v-bind="{ ...itemOptions }"
        :optionList="itemOptions.optionList"
        :showSearch="{ cascaderFilter }"
        v-decorator="decorator"
        :placeholder="itemOptions.placeholder"
      />
    </a-form-model-item>
  </a-col>
  <!-- select 选择框 -->
  <a-col
    v-bind="itemOptions.responsive"
    v-else-if="itemOptions.fieldName && itemOptions.type === 'select'"
  >
    <a-form-model-item :label="itemOptions.labelText">
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
    </a-form-model-item>
  </a-col>
  <!-- 滑动 输入条 -->
  <a-col
    v-bind="itemOptions.responsive"
    v-else-if="itemOptions.fieldName && itemOptions.type === 'slider'"
  >
    <a-form-model-item :label="itemOptions.labelText">
      <a-slider v-bind="{ ...itemOptions }" v-decorator="decorator" />
    </a-form-model-item>
  </a-col>
  <!-- 评分 -->
  <a-col
    v-bind="itemOptions.responsive"
    v-else-if="itemOptions.fieldName && itemOptions.type === 'rate'"
  >
    <a-form-model-item :label="itemOptions.labelText">
      <a-rate v-bind="{ ...itemOptions }" v-decorator="decorator" />
    </a-form-model-item>
  </a-col>
</template>

<script>
import { formModelRule } from './../../../mixins/index'
import { MedRadio, MedCheckbox } from './../../index'
export default {
  name: 'FieldRender',
  mixins: [formModelRule],
  components: {
    MedRadio,
    MedCheckbox
  },
  props: {
    form: Object,
    formLayout: Object
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
  }
}
</script>
