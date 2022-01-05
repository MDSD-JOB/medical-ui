import MedAlert from './src'
MedAlert.install = Vue => Vue.component(MedAlert.name, MedAlert)
MedAlert.install = Vue =>
  Vue.component(MedAlert.TreeNode.name, MedAlert.TreeNode)
export default MedAlert
