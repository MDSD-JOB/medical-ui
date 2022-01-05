import MedDrawer from './src'
MedDrawer.install = Vue => Vue.component(MedDrawer.name, MedDrawer)
MedDrawer.install = Vue =>
  Vue.component(MedDrawer.TreeNode.name, MedDrawer.TreeNode)
export default MedDrawer
