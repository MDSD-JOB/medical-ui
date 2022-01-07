import MedSwitch from './src'
MedSwitch.install = Vue => Vue.component(MedSwitch.name, MedSwitch)
MedSwitch.install = Vue =>
  Vue.component(MedSwitch.TreeNode.name, MedSwitch.TreeNode)
export default MedSwitch
