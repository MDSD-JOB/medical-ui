import MedSkeleton from './src'
MedSkeleton.install = Vue => Vue.component(MedSkeleton.name, MedSkeleton)
MedSkeleton.install = Vue =>
  Vue.component(MedSkeleton.TreeNode.name, MedSkeleton.TreeNode)
export default MedSkeleton
