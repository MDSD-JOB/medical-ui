import MedDatePicker from './src'
import MedMonthPicker from './src/month'
import MedRangePicker from './src/range'
import MedWeekPicker from './src/week'
MedDatePicker.install = Vue => Vue.component(MedDatePicker.name, MedDatePicker)
MedDatePicker.install = Vue =>
  Vue.component(MedDatePicker.TreeNode.name, MedDatePicker.TreeNode)
MedMonthPicker.install = Vue =>
  Vue.component(MedMonthPicker.name, MedMonthPicker)
MedMonthPicker.install = Vue =>
  Vue.component(MedMonthPicker.TreeNode.name, MedMonthPicker.TreeNode)
MedRangePicker.install = Vue =>
  Vue.component(MedRangePicker.name, MedRangePicker)
MedRangePicker.install = Vue =>
  Vue.component(MedRangePicker.TreeNode.name, MedRangePicker.TreeNode)
MedWeekPicker.install = Vue => Vue.component(MedWeekPicker.name, MedWeekPicker)
MedWeekPicker.install = Vue =>
  Vue.component(MedWeekPicker.TreeNode.name, MedWeekPicker.TreeNode)
export { MedDatePicker, MedMonthPicker, MedRangePicker, MedWeekPicker }
