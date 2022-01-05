import MedProgress from './src'
MedProgress.install = Vue => Vue.component(MedProgress.name, MedProgress)
MedProgress.install = Vue =>
  Vue.component(MedProgress.TreeNode.name, MedProgress.TreeNode)
export default MedProgress
