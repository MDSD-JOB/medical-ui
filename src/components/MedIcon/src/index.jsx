import './index.less'
import { Icon } from 'ant-design-vue'

export default {
  name: 'MedIcon',
  props: {
    url: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      return `anticon-${this.type}`
    }
  },
  render() {
    const IconFont = Icon.createFromIconfontCN({
      scriptUrl: this.url
    })
    return this.url ? (
      <IconFont type={this.iconName} />
    ) : (
      <a-icon type={this.type} />
    )
  }
}
