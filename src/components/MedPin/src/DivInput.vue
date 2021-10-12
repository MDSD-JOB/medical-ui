<template>
  <span
    class="edit-div"
    v-html="innerText"
    :contenteditable="canEdit"
    @focus="focus"
    @blur="blur"
    @input="changeText"
  ></span>
</template>
<script>
export default {
  name: 'editDiv',
  props: {
    value: {
      type: String,
      default: ''
    },
    canEdit: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      innerText: this.value,
      isLocked: false
    }
  },
  methods: {
    focus() {
      this.isLocked = true
    },
    blur() {
      this.isLocked = false
    },
    changeText() {
      this.$emit('input', this.$el.innerHTML)
    }
  },
  watch: {
    value() {
      if (!this.isLocked || !this.innerText) {
        this.innerText = this.value
      }
    }
  }
}
</script>
<style lang="less">
.edit-div {
  width: 100%;
  height: 100%;
  overflow: auto;
  word-break: break-all;
  outline: none;
  user-select: text;
  white-space: pre-wrap;
  text-align: left;
  &[contenteditable='true'] {
    user-modify: read-write-plaintext-only;
    &:empty:before {
      content: attr(placeholder);
      display: block;
      color: #ccc;
    }
  }
}
</style>
