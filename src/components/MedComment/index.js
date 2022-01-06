import MedComment from './src'
MedComment.install = Vue => Vue.component(MedComment.name, MedComment)
MedComment.install = Vue =>
  Vue.component(MedComment.TreeNode.name, MedComment.TreeNode)
export default MedComment
