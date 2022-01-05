import MedSpin from './src'
MedSpin.install = Vue => Vue.component(MedSpin.name, MedSpin)
MedSpin.install = Vue => Vue.component(MedSpin.TreeNode.name, MedSpin.TreeNode)
export default MedSpin
