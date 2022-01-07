import MedTransfer from './src'
MedTransfer.install = Vue => Vue.component(MedTransfer.name, MedTransfer)
MedTransfer.install = Vue =>
  Vue.component(MedTransfer.TreeNode.name, MedTransfer.TreeNode)
export default MedTransfer
