import MedUpload from './src'
MedUpload.install = Vue => Vue.component(MedUpload.name, MedUpload)
MedUpload.install = Vue =>
  Vue.component(MedUpload.TreeNode.name, MedUpload.TreeNode)
export default MedUpload
