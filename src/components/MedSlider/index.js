import MedSlider from './src'
MedSlider.install = Vue => Vue.component(MedSlider.name, MedSlider)
MedSlider.install = Vue =>
  Vue.component(MedSlider.TreeNode.name, MedSlider.TreeNode)
export default MedSlider
