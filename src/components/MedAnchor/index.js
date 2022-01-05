import MedAnchor from './src'
import MedAnchorLink from './src/link'
MedAnchor.install = Vue => Vue.component(MedAnchor.name, MedAnchor)
MedAnchor.install = Vue =>
  Vue.component(MedAnchor.TreeNode.name, MedAnchor.TreeNode)
MedAnchorLink.install = Vue => Vue.component(MedAnchorLink.name, MedAnchorLink)
MedAnchorLink.install = Vue =>
  Vue.component(MedAnchorLink.TreeNode.name, MedAnchorLink.TreeNode)
export { MedAnchor, MedAnchorLink }
