import MedSModal from './src'
MedSModal.install = Vue => Vue.component(MedSModal.name, MedSModal)
MedSModal.install = Vue =>
  Vue.component(MedSModal.TreeNode.name, MedSModal.TreeNode)
export default MedSModal
