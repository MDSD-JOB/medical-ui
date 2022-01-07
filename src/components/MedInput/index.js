import MedInput from './src'
import MedInputPassword from './src/password'
import MedInputSearch from './src/search'
import MedInputGroup from './src/group'
import MedTextarea from './src/textarea'
MedInput.install = Vue => Vue.component(MedInput.name, MedInput)
MedInput.install = Vue =>
  Vue.component(MedInput.TreeNode.name, MedInput.TreeNode)
MedInputPassword.install = Vue =>
  Vue.component(MedInputPassword.name, MedInputPassword)
MedInputPassword.install = Vue =>
  Vue.component(MedInputPassword.TreeNode.name, MedInputPassword.TreeNode)
MedInputSearch.install = Vue =>
  Vue.component(MedInputSearch.name, MedInputSearch)
MedInputSearch.install = Vue =>
  Vue.component(MedInputSearch.TreeNode.name, MedInputSearch.TreeNode)
MedInputGroup.install = Vue => Vue.component(MedInputGroup.name, MedInputGroup)
MedInputGroup.install = Vue =>
  Vue.component(MedInputGroup.TreeNode.name, MedInputGroup.TreeNode)
MedTextarea.install = Vue => Vue.component(MedTextarea.name, MedTextarea)
MedTextarea.install = Vue =>
  Vue.component(MedTextarea.TreeNode.name, MedTextarea.TreeNode)
export {
  MedInput,
  MedInputPassword,
  MedInputSearch,
  MedInputGroup,
  MedTextarea
}
