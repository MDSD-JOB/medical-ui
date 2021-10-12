<template>
  <div id="med-radio-wrapper">
    <a-form-item
      v-if="isFormItem"
      :label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol"
      :label="$attrs.labelText"
    >
      <a-radio-group
        :class="{ continuous: buttonType && continuous }"
        v-decorator="decorator"
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
    </a-form-item>
    <a-form-model-item
      v-else-if="isFormModelItem"
      :label="$attrs.labelText"
      :prop="$attrs.fieldName"
    >
      <a-radio-group
        :class="{ continuous: buttonType && continuous }"
        v-model="form[$attrs.fieldName]"
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
    </a-form-model-item>
    <a-radio-group
      v-else
      :class="{ continuous: buttonType && continuous }"
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
    initialValue: {
      type: String,
      required: false,
      default: null
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
    continuous: {
      type: Boolean,
      required: false,
      default: false
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
