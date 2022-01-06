import MedEmpty from './src'
MedEmpty.install = Vue => Vue.component(MedEmpty.name, MedEmpty)
MedEmpty.install = Vue =>
  Vue.component(MedEmpty.TreeNode.name, MedEmpty.TreeNode)
export default MedEmpty
