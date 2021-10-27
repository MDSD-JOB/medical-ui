import './index.less'
import { Icon } from 'ant-design-vue'
require('dotenv').config()

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: process.env.VUE_APP_ICON_URL ? process.env.VUE_APP_ICON_URL : ''
})
export default {
  name: 'MedIcon',
  components: {
    IconFont
  },
  props: {
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
    return <icon-font type={this.iconName} />
  }
}
