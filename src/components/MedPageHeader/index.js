import MedPageHeader from './src'
MedPageHeader.install = Vue => Vue.component(MedPageHeader.name, MedPageHeader)
MedPageHeader.install = Vue =>
  Vue.component(MedPageHeader.TreeNode.name, MedPageHeader.TreeNode)
export default MedPageHeader
