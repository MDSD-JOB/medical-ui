import './index.less'
import { Icon } from 'ant-design-vue'
import T from 'ant-design-vue/es/icon/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(
    {
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
    defaultProps
  )
}
export default {
  TreeNode: { ...T.TreeNode, name: 'MedIconNode' },
  name: 'MedIcon',
  inheritAttrs: false,
  props: selfProps({}),
  computed: {
    iconName() {
      return `${this.prefix}-${this.type}`
    }
  },
  render() {
    const { $attrs, $scopedSlots } = this
    const IconFont = Icon.createFromIconfontCN({
      scriptUrl: this.url
    })
    const TProps = {
      props: getOptionProps(this),
      on: {
        ...getListeners(this)
      },
      attrs: $attrs,
      class: getClass(this),
      style: getStyle(this),
      scopedSlots: $scopedSlots
    }
    return this.url ? (
      <IconFont type={this.iconName} />
    ) : (
      <a-icon type={this.type} {...TProps} />
    )
  }
}
