import MedButton from './src/index.jsx'
import MedButtonGroup from './src/group.jsx'
MedButton.install = Vue => Vue.component(MedButton.name, MedButton)
MedButtonGroup.install = Vue =>
  Vue.component(MedButtonGroup.name, MedButtonGroup)
MedButton.install = Vue =>
  Vue.component(MedButton.TreeNode.name, MedButton.TreeNode)
MedButtonGroup.install = Vue =>
  Vue.component(MedButtonGroup.TreeNode.name, MedButtonGroup.TreeNode)
export { MedButton, MedButtonGroup }
