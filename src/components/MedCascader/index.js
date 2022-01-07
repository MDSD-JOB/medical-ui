import MedCascader from './src'
MedCascader.install = Vue => Vue.component(MedCascader.name, MedCascader)
MedCascader.install = Vue =>
  Vue.component(MedCascader.TreeNode.name, MedCascader.TreeNode)
export default MedCascader
