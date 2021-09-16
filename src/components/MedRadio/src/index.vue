<template>
  <div>
    <a-form-item
      v-if="isFormItem"
      :label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol"
      :label="$attrs.labelText"
    >
      <a-radio-group v-bind="$attrs" v-decorator="decorator">
        <template v-for="(item, index) in $attrs.optionList">
          <a-radio-button
            v-if="$attrs.buttonType"
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
    <a-radio-group v-else v-bind="$attrs" @change="onChange">
      <template v-for="(item, index) in $attrs.optionList">
        <a-radio-button
          v-if="$attrs.buttonType"
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
      default: () => {}
    },
    decorator: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  methods: {
    onChange(e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>
