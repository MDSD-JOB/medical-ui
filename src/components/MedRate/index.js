import MedRate from './src'
MedRate.install = Vue => Vue.component(MedRate.name, MedRate)
MedRate.install = Vue => Vue.component(MedRate.TreeNode.name, MedRate.TreeNode)
export default MedRate
