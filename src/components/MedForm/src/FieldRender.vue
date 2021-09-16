<template>
  <!-- input 输入框 -->
  <a-col
    v-bind="itemOptions.responsive"
    v-if="itemOptions.fieldName && itemOptions.type === 'text'"
  >
    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
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
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
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
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
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
    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      :label="itemOptions.labelText"
    >
      <a-radio-group v-bind="{ ...itemOptions }" v-decorator="decorator">
        <template v-for="(item, index) in itemOptions.optionList">
          <a-radio-button
            v-if="itemOptions.buttonType"
            :key="index"
            :value="item.value"
            :disabled="item.disabled"
          >
            {{ item.label }}
          </a-radio-button>
          <a-radio
            v-else
            :disabled="item.disabled"
            :key="index"
            :value="item.value"
          >
            {{ item.label }}
          </a-radio>
        </template>
      </a-radio-group>
    </a-form-item>
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
    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      :label="itemOptions.labelText"
    >
      <a-checkbox-group v-bind="{ ...itemOptions }" v-decorator="decorator">
        <template v-for="(item, index) in itemOptions.optionList">
          <a-checkbox
            :disabled="item.disabled"
            :key="index"
            :value="item.value"
          >
            {{ item.label }}
          </a-checkbox>
        </template>
      </a-checkbox-group>
    </a-form-item>
  </a-col>
  <!-- 日期 选择框 -->
  <a-col
    v-bind="itemOptions.responsive"
    v-else-if="itemOptions.fieldName && itemOptions.type === 'datetime'"
  >
    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      :label="itemOptions.labelText"
    >
      <a-date-picker
        v-bind="{ ...itemOptions }"
        :format="itemOptions.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'"
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
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      :label="itemOptions.labelText"
    >
      <a-range-picker
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
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      :label="itemOptions.labelText"
    >
      <a-cascader
        v-bind="{ ...itemOptions }"
        :options="itemOptions.options"
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
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
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
        <template v-for="(item, index) in itemOptions.options">
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
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
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
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      :label="itemOptions.labelText"
    >
      <a-rate v-bind="{ ...itemOptions }" v-decorator="decorator" />
    </a-form-item>
  </a-col>
</template>

<script>
export default {
  name: 'FieldRender',
  props: {
    itemOptions: {
      type: Object,
      default: function() {
        return {
          label: '控件名称',
          type: 'text',
          initialValue: '',
          value: '',
          placeholder: ''
        }
      }
    }
  },
  data() {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      decorator: [],
      checkAll: false // 全选
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
      this.itemOptions['validater']
        ? this.itemOptions['validater'](rule, value, callback)
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
