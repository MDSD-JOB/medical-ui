import MedPopconfirm from './src'
MedPopconfirm.install = Vue => Vue.component(MedPopconfirm.name, MedPopconfirm)
MedPopconfirm.install = Vue =>
  Vue.component(MedPopconfirm.TreeNode.name, MedPopconfirm.TreeNode)
export default MedPopconfirm
