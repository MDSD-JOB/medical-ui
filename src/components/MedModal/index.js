import MedModal from './src'
MedModal.install = Vue => Vue.component(MedModal.name, MedModal)
MedModal.install = Vue =>
  Vue.component(MedModal.TreeNode.name, MedModal.TreeNode)
export default MedModal
