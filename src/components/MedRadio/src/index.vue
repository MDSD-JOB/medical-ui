<template>
  <div class="med-radio-wrapper">
    <a-form-item
      v-if="isFormItem"
      :label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol"
      :label="$attrs.labelText"
    >
      <a-radio-group :buttonStyle="buttonStyle" v-decorator="decorator">
        <template v-for="(item, index) in optionList">
          <a-radio-button
            v-if="buttonType"
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
    <a-radio-group
      v-else
      :buttonStyle="buttonStyle"
      :defaultValue="initialValue"
      @change="onChange"
    >
      <template v-for="(item, index) in optionList">
        <a-radio-button
          v-if="buttonType"
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
    },
    optionList: {
      type: Array,
      required: true,
      default: () => []
    },
    buttonType: {
      type: Boolean,
      required: false,
      default: false
    },
    buttonStyle: {
      type: String,
      required: false,
      default: 'solid'
    },
    initialValue: {
      type: String,
      required: false,
      default: null
    }
  },
  methods: {
    onChange(e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
