export default {
  name: 'formModelRuleMixin',
  created() {
    this.rules = [
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
          this.rules = [
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
