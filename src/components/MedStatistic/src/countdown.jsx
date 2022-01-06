import './index.less'
import T from 'ant-design-vue/es/statistic/index'
import {
  getClass,
  getStyle,
  initDefaultProps,
  getListeners,
  getOptionProps
} from '../../_utils/props-util'

const selfProps = (defaultProps = {}) => {
  return initDefaultProps(T.Countdown.props, defaultProps)
}
export default {
  TreeNode: { ...T.Countdown.TreeNode, name: 'MedStatisticCountdownNode' },
  name: 'MedStatisticCountdown',
  inheritAttrs: false,
  props: selfProps({}),
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
      <a-statistic-countdown
        class="med-statistic-countdown-wrapper"
        {...TProps}
      >
        {bodySlots}
      </a-statistic-countdown>
    )
  }
}
