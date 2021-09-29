export default {
  name: 'formModelRuleMixin',
  created() {
    let rules = {}
    this.dataSource.forEach(item => {
      const key = item.fieldName
      const value = [
        {
          required: item['required'] || false,
          message: item['wrongMsg'] || null,
          trigger: item['trigger'] || null
        },
        {
          validator: item['validator'] || this.validator,
          trigger: item['trigger'] || null
        }
      ]
      rules[key] = value
    })
    this.rules = rules
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
