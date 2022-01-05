import MedSpace from './src'
MedSpace.install = Vue => Vue.component(MedSpace.name, MedSpace)
MedSpace.install = Vue =>
  Vue.component(MedSpace.TreeNode.name, MedSpace.TreeNode)
export default MedSpace
