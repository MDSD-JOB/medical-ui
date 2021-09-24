export default {
  name: 'formModelRuleMixin',
  props: {
    itemOptions: {
      type: Object,
      default: () => ({
        label: '控件名称',
        type: 'text',
        initialValue: '',
        value: '',
        placeholder: '',
        validator: (rule, value, callback) => {
          callback()
        }
      })
    }
  },
  data() {
    return {
      decorator: []
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
      this.itemOptions['validator']
        ? this.itemOptions['validator'](rule, value, callback)
        : callback()
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
