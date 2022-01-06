import MedAvatar from './src'
MedAvatar.install = Vue => Vue.component(MedAvatar.name, MedAvatar)
MedAvatar.install = Vue =>
  Vue.component(MedAvatar.TreeNode.name, MedAvatar.TreeNode)
export default MedAvatar
