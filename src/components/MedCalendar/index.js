import MedCalendar from './src'
MedCalendar.install = Vue => Vue.component(MedCalendar.name, MedCalendar)
MedCalendar.install = Vue =>
  Vue.component(MedCalendar.TreeNode.name, MedCalendar.TreeNode)
export default MedCalendar
