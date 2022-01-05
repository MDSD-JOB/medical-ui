import MedPagination from './src'
MedPagination.install = Vue => Vue.component(MedPagination.name, MedPagination)
MedPagination.install = Vue =>
  Vue.component(MedPagination.TreeNode.name, MedPagination.TreeNode)
export default MedPagination
