import MedStatistic from './src'
import MedStatisticCountdown from './src/countdown'
MedStatistic.install = Vue => Vue.component(MedStatistic.name, MedStatistic)
MedStatistic.install = Vue =>
  Vue.component(MedStatistic.TreeNode.name, MedStatistic.TreeNode)
MedStatisticCountdown.install = Vue =>
  Vue.component(MedStatisticCountdown.name, MedStatisticCountdown)
MedStatisticCountdown.install = Vue =>
  Vue.component(
    MedStatisticCountdown.TreeNode.name,
    MedStatisticCountdown.TreeNode
  )
export { MedStatistic, MedStatisticCountdown }
