<template>
  <div class="med-checkbox-wrapper">
    <a-form-item
      v-if="isFormItem"
      :label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol"
      :label="$attrs.labelText"
    >
      <a-checkbox-group v-decorator="decorator" @change="change">
        <template v-for="(item, index) in optionList">
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
      v-else-if="isFormModelItem"
      v-model="form[$attrs.fieldName]"
      @change="change"
    >
      <template v-for="(item, index) in optionList">
        <a-checkbox :disabled="item.disabled" :key="index" :value="item.value">
          {{ item.label }}
        </a-checkbox>
      </template>
    </a-checkbox-group>
    <a-checkbox-group
      v-else
      @change="onChange"
      :defaultValue="initialValue"
      :value="value"
    >
      <template v-for="(item, index) in optionList">
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
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    isFormItem: {
      type: Boolean,
      required: false,
      default: false
    },
    isFormModelItem: {
      type: Boolean,
      required: false,
      default: false
    },
    form: {
      type: Object,
      required: false
    },
    formLayout: {
      type: Object,
      required: false,
      default: () => ({})
    },
    decorator: {
      type: Array,
      required: false,
      default: () => []
    },
    optionList: {
      type: Array,
      required: true,
      default: () => []
    },
    initialValue: {
      type: Array,
      required: false,
      default: null
    },
    change: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    onChange(value) {
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
