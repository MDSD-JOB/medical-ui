import MedTag from './src'
import MedCheckableTag from './src/check'

MedTag.install = Vue => Vue.component(MedTag.name, MedTag)
MedTag.install = Vue => Vue.component(MedTag.TreeNode.name, MedTag.TreeNode)
MedCheckableTag.install = Vue =>
  Vue.component(MedCheckableTag.name, MedCheckableTag)
MedCheckableTag.install = Vue =>
  Vue.component(MedCheckableTag.TreeNode.name, MedCheckableTag.TreeNode)
export { MedTag, MedCheckableTag }
