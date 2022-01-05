import MedResult from './src'
MedResult.install = Vue => Vue.component(MedResult.name, MedResult)
MedResult.install = Vue =>
  Vue.component(MedResult.TreeNode.name, MedResult.TreeNode)
export default MedResult
