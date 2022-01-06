import MedBadge from './src'
MedBadge.install = Vue => Vue.component(MedBadge.name, MedBadge)
MedBadge.install = Vue =>
  Vue.component(MedBadge.TreeNode.name, MedBadge.TreeNode)
export default MedBadge
