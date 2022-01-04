import './index.less'
import { Icon } from 'ant-design-vue'
import T from 'ant-design-vue/es/icon/index'
export default {
  name: 'MedIcon',
  props: {
    ...T.props,
    prefix: {
      type: String,
      required: false,
      default: 'anticon'
    },
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
      return `${this.prefix}-${this.type}`
    }
  },
  render() {
    const { iconName, $props, $scopedSlots } = this
    const IconFont = Icon.createFromIconfontCN({
      scriptUrl: this.url
    })
    const iconProps = {
      ...$props
    }
    const scopedSlots = {
      ...$scopedSlots
    }
    return this.url ? (
      <IconFont class={iconName} type={this.iconName} />
    ) : (
      <a-icon
        type={this.type}
        {...{
          attrs: iconProps,
          scopedSlots
        }}
      />
    )
  }
}
