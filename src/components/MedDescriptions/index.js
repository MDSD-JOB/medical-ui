import MedDescriptions from './src'
import MedDescriptionsItem from './src/item'
MedDescriptions.install = Vue =>
  Vue.component(MedDescriptions.name, MedDescriptions)
MedDescriptions.install = Vue =>
  Vue.component(MedDescriptions.TreeNode.name, MedDescriptions.TreeNode)
MedDescriptionsItem.install = Vue =>
  Vue.component(MedDescriptionsItem.name, MedDescriptionsItem)
MedDescriptionsItem.install = Vue =>
  Vue.component(MedDescriptionsItem.TreeNode.name, MedDescriptionsItem.TreeNode)
export { MedDescriptions, MedDescriptionsItem }
