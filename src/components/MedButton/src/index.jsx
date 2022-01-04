import './index.less'

import T from 'ant-design-vue/es/button/index'
import { debounce } from 'lodash'
export default {
  name: 'MedButton',
  data() {
    return {
      key: this.activeTabKey
    }
  },
  props: {
    ...T.props,
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
  methods: {
    handleClick() {
      const _this = this
      console.log(1111111)
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
      $props,
      $scopedSlots
    } = this
    const scopedSlots = {
      ...$scopedSlots
    }
    const attrProps = {
      ...$props
    }
    const bodySlots = Object.keys(this.$slots).map(slot => {
      return <template slot={slot}>{this.$slots[slot]}</template>
    })
    return (
      <a-button
        class="med-button-wrapper"
        class={active ? 'med-button-active' : ''}
        {...{
          attrs: attrProps,
          on: {
            ...this.$listeners,
            click: handleClick
          },
          scopedSlots
        }}
        style={{
          width: width,
          height: height,
          background: bg,
          borderColor: bg,
          color: color
        }}
      >
        <div vShow={!icon && cusIcon} class="icon-slot">
          <img src={cusIcon} alt="自定义Icon" />
        </div>
        {bodySlots}
      </a-button>
    )
  }
}
