import MedForm from './src'
import MedFormItem from './src/item'
MedForm.install = Vue => Vue.component(MedForm.name, MedForm)
MedForm.install = Vue => Vue.component(MedForm.TreeNode.name, MedForm.TreeNode)
MedFormItem.install = Vue => Vue.component(MedFormItem.name, MedFormItem)
MedFormItem.install = Vue =>
  Vue.component(MedFormItem.TreeNode.name, MedFormItem.TreeNode)
export { MedForm, MedFormItem }
