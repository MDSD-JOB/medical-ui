import MedSelect from './src'
import MedSelectOption from './src/option'
import MedSelectOptGroup from './src/optGroup'

MedSelect.install = Vue => Vue.component(MedSelect.name, MedSelect)
MedSelect.install = Vue =>
  Vue.component(MedSelect.TreeNode.name, MedSelect.TreeNode)
MedSelectOption.install = Vue =>
  Vue.component(MedSelectOption.name, MedSelectOption)
MedSelectOption.install = Vue =>
  Vue.component(MedSelectOption.TreeNode.name, MedSelectOption.TreeNode)
MedSelectOptGroup.install = Vue =>
  Vue.component(MedSelectOptGroup.name, MedSelectOptGroup)
MedSelectOptGroup.install = Vue =>
  Vue.component(MedSelectOptGroup.TreeNode.name, MedSelectOptGroup.TreeNode)
export { MedSelect, MedSelectOption, MedSelectOptGroup }
