import MedDropdown from './src'
import MedDropdownButton from './src/button'

MedDropdown.install = Vue => Vue.component(MedDropdown.name, MedDropdown)
MedDropdownButton.install = Vue =>
  Vue.component(MedDropdownButton.name, MedDropdownButton)
MedDropdown.install = Vue =>
  Vue.component(MedDropdown.TreeNode.name, MedDropdown.TreeNode)
MedDropdownButton.install = Vue =>
  Vue.component(MedDropdownButton.TreeNode.name, MedDropdownButton.TreeNode)

export { MedDropdown, MedDropdownButton }
