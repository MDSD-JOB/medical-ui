import MedModal from './src/index.jsx'
MedModal.install = Vue => Vue.component(MedModal.name, MedModal)
MedModal.install = Vue =>
  Vue.component(MedModal.TreeNode.name, MedModal.TreeNode)
export default MedModal
