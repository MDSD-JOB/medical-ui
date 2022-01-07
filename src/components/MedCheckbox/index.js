import MedCheckbox from './src'
import MedCheckboxGroup from './src/group'
MedCheckbox.install = Vue => Vue.component(MedCheckbox.name, MedCheckbox)
MedCheckbox.install = Vue =>
  Vue.component(MedCheckbox.TreeNode.name, MedCheckbox.TreeNode)
MedCheckboxGroup.install = Vue =>
  Vue.component(MedCheckboxGroup.name, MedCheckboxGroup)
MedCheckboxGroup.install = Vue =>
  Vue.component(MedCheckboxGroup.TreeNode.name, MedCheckboxGroup.TreeNode)
export { MedCheckbox, MedCheckboxGroup }
