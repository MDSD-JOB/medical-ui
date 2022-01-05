import MedDivider from './src'
MedDivider.install = Vue => Vue.component(MedDivider.name, MedDivider)
MedDivider.install = Vue =>
  Vue.component(MedDivider.TreeNode.name, MedDivider.TreeNode)
export default MedDivider
