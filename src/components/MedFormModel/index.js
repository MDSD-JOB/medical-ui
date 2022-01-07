import MedFormModel from './src'
import MedFormModelItem from './src/item'

MedFormModel.install = Vue => Vue.component(MedFormModel.name, MedFormModel)
MedFormModel.install = Vue =>
  Vue.component(MedFormModel.TreeNode.name, MedFormModel.TreeNode)
MedFormModelItem.install = Vue =>
  Vue.component(MedFormModelItem.name, MedFormModelItem)
MedFormModelItem.install = Vue =>
  Vue.component(MedFormModelItem.TreeNode.name, MedFormModelItem.TreeNode)
export { MedFormModel, MedFormModelItem }
