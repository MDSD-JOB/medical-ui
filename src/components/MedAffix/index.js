import MedAffix from './src'
MedAffix.install = Vue => Vue.component(MedAffix.name, MedAffix)
MedAffix.install = Vue =>
  Vue.component(MedAffix.TreeNode.name, MedAffix.TreeNode)
export default MedAffix
