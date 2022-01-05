import './index.less'
import T from 'ant-design-vue/es/modal/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const sizeObj = { mini: '30%', small: '50%', medium: '70%', large: '90%' }
const selfProps = (defaultProps = {}) => {
  return initDefaultProps(
    {
      ...T.props,
      okText: {
        type: String,
        default: '确认'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      // 大小设置 mini / small / medium / large
      size: {
        type: String,
        default: ''
      },
      // 宽度 520 / 650 / 750 / 900
      width: {
        type: [Number, String],
        default: 520
      }
    },
    defaultProps
  )
}
export default {
  TreeNode: { ...T.TreeNode, name: 'MedModalNode' },
  name: 'MedModal',
  inheritAttrs: false,
  props: selfProps({}),
  data() {
    return {
      customizeWidth: this.width
    }
  },
  created() {
    console.log(T)
  },
  mounted() {
    this.setWidth()
  },
  methods: {
    setWidth() {
      Object.keys(sizeObj).forEach(key => {
        if (key === this.size) this.customizeWidth = sizeObj[key]
      })
    }
  },
  render() {
    const { $attrs, $scopedSlots } = this
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
    const bodySlots = Object.keys(this.$slots).map(slot => {
      if (slot === 'default') return this.$slots[slot]
      return <template slot={slot}>{this.$slots[slot]}</template>
    })
    return (
      <a-modal class="med-modal-wrapper" {...TProps}>
        {bodySlots}
      </a-modal>
    )
  }
}
