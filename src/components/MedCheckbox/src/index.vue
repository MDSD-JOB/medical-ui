<template>
  <div>
    <a-form-item
      v-if="isFormItem"
      :label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol"
      :label="itemOptions.labelText"
    >
      <a-checkbox-group
        v-if="isFormItem"
        v-bind="{ ...itemOptions }"
        v-decorator="decorator"
      >
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
    <a-checkbox-group
      v-else
      v-bind="{ ...itemOptions }"
      v-model="itemOptions.fieldName"
    >
      <template v-for="(item, index) in itemOptions.optionList">
        <a-checkbox :disabled="item.disabled" :key="index" :value="item.value">
          {{ item.label }}
        </a-checkbox>
      </template>
    </a-checkbox-group>
  </div>
</template>
<script>
export default {
  name: 'MedCheckbox',
  data() {
    return {
      checkAll: false
    }
  },
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
