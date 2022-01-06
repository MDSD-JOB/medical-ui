import MedCarousel from './src'
MedCarousel.install = Vue => Vue.component(MedCarousel.name, MedCarousel)
MedCarousel.install = Vue =>
  Vue.component(MedCarousel.TreeNode.name, MedCarousel.TreeNode)
export default MedCarousel
