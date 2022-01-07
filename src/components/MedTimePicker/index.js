import MedTimePicker from './src'
MedTimePicker.install = Vue => Vue.component(MedTimePicker.name, MedTimePicker)
MedTimePicker.install = Vue =>
  Vue.component(MedTimePicker.TreeNode.name, MedTimePicker.TreeNode)
export default MedTimePicker
