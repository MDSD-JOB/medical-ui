<template>
  <div class="med-checkbox-wrapper">
    <a-form-item
      v-if="isFormItem"
      :label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol"
      :label="$attrs.labelText"
    >
      <a-checkbox-group v-decorator="decorator">
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
    <a-checkbox-group v-else @change="onChange" :defaultValue="initialValue">
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
    isFormItem: {
      type: Boolean,
      required: false,
      default: false
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
