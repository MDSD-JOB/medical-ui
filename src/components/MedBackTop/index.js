import MedBackTop from './src'
MedBackTop.install = Vue => Vue.component(MedBackTop.name, MedBackTop)
MedBackTop.install = Vue =>
  Vue.component(MedBackTop.TreeNode.name, MedBackTop.TreeNode)
export default MedBackTop
