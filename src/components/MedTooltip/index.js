import MedTooltip from './src'
MedTooltip.install = Vue => Vue.component(MedTooltip.name, MedTooltip)
MedTooltip.install = Vue =>
  Vue.component(MedTooltip.TreeNode.name, MedTooltip.TreeNode)
export default MedTooltip
