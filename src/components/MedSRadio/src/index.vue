<template>
  <div class="med-s-radio-wrapper">
    <a-form-item
      v-if="isFormItem"
      :label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol"
      :label="$attrs.labelText"
    >
      <a-radio-group
        :class="{ continuous: buttonType && continuous }"
        v-decorator="decorator"
        @change="change"
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
    <a-radio-group
      v-else-if="isFormModelItem"
      :class="{ continuous: buttonType && continuous }"
      v-model="form[$attrs.fieldName]"
      @change="change"
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
    <a-radio-group
      v-else
      :class="{ continuous: buttonType && continuous }"
      :defaultValue="initialValue"
      :value="value"
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
          :key="index"
          :value="item.value"
          :disabled="item.disabled"
        >
          {{ item.label }}
        </a-radio>
      </template>
    </a-radio-group>
  </div>
</template>
<script>
export default {
  name: 'MedSRadio',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    itemOptions: {
      type: Object,
      default: () => {}
    },
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
    initialValue: {
      type: [String, Number],
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
    },
    change: {
      type: Function,
      default: () => {}
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
