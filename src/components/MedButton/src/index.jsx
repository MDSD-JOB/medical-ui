import './index.less'
import T from 'ant-design-vue/es/button/index'
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
      disabled: {
        type: Boolean,
        required: false,
        default: false
      },
      width: {
        type: String,
        required: false,
        default: null
      },
      height: {
        type: String,
        required: false,
        default: null
      },
      active: {
        type: Boolean,
        required: false,
        default: false
      },
      cusIcon: {
        type: String,
        required: false,
        default: null
      },
      bg: {
        type: String,
        required: false,
        default: null
      },
      color: {
        type: String,
        required: false,
        default: null
      },
      timeout: {
        type: Number,
        required: false,
        default: 0
      }
    },
    defaultProps
  )
}
import { debounce } from 'lodash'
export default {
  TreeNode: { ...T.TreeNode, name: 'MedButtonNode' },
  name: 'MedButton',
  inheritAttrs: false,
  data() {
    return {
      key: this.activeTabKey
    }
  },
  props: selfProps({}),
  methods: {
    handleClick() {
      const _this = this
      debounce(evt => _this.$emit('click', evt), _this.timeout, true)()
    }
  },
  render() {
    const {
      active,
      bg,
      color,
      width,
      height,
      icon,
      cusIcon,
      handleClick,
      $attrs,
      $scopedSlots
    } = this
    const TProps = {
      props: getOptionProps(this),
      on: {
        ...getListeners(this),
        click: handleClick
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
      <a-button
        class={(active ? 'med-button-active' : '', 'med-button-wrapper')}
        style={{
          width: width,
          height: height,
          background: bg,
          borderColor: bg,
          color: color
        }}
        {...TProps}
      >
        <div vShow={!icon && cusIcon} class="icon-slot">
          <img src={cusIcon} alt="自定义Icon" />
        </div>
        {bodySlots}
      </a-button>
    )
  }
}
