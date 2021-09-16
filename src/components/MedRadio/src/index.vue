<template>
  <div>
    <a-form-item
      v-if="isFormItem"
      :label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol"
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
    <a-radio-group v-else v-bind="{ ...itemOptions }">
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
  </div>
</template>
<script>
export default {
  name: 'MedRadio',
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
    },
    isFormItem: {
      type: Boolean,
      required: false,
      default: false
    },
    formLayout: {
      type: Object,
      required: true
    },
    decorator: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>
