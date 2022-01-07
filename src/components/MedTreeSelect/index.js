import MedTreeSelect from './src'
import MedTreeSelectNode from './src/node'
MedTreeSelect.install = Vue => Vue.component(MedTreeSelect.name, MedTreeSelect)
MedTreeSelect.install = Vue =>
  Vue.component(MedTreeSelect.TreeNode.name, MedTreeSelect.TreeNode)
MedTreeSelectNode.install = Vue =>
  Vue.component(MedTreeSelectNode.name, MedTreeSelectNode)
MedTreeSelectNode.install = Vue =>
  Vue.component(MedTreeSelectNode.TreeNode.name, MedTreeSelectNode.TreeNode)
export { MedTreeSelect, MedTreeSelectNode }
