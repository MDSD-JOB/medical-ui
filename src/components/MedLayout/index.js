import MedLayout from './src'
import MedLayoutHeader from './src/header'
import MedLayoutContent from './src/content'
import MedLayoutSider from './src/sider'
import MedLayoutFooter from './src/footer'
MedLayout.install = Vue => Vue.component(MedLayout.name, MedLayout)
MedLayout.install = Vue =>
  Vue.component(MedLayout.TreeNode.name, MedLayout.TreeNode)
MedLayoutHeader.install = Vue =>
  Vue.component(MedLayoutHeader.name, MedLayoutHeader)
MedLayoutHeader.install = Vue =>
  Vue.component(MedLayoutHeader.TreeNode.name, MedLayoutHeader.TreeNode)
MedLayoutContent.install = Vue =>
  Vue.component(MedLayoutContent.name, MedLayoutContent)
MedLayoutContent.install = Vue =>
  Vue.component(MedLayoutContent.TreeNode.name, MedLayoutContent.TreeNode)
MedLayoutSider.install = Vue =>
  Vue.component(MedLayoutSider.name, MedLayoutSider)
MedLayoutSider.install = Vue =>
  Vue.component(MedLayoutSider.TreeNode.name, MedLayoutSider.TreeNode)
MedLayoutFooter.install = Vue =>
  Vue.component(MedLayoutFooter.name, MedLayoutFooter)
MedLayoutFooter.install = Vue =>
  Vue.component(MedLayoutFooter.TreeNode.name, MedLayoutFooter.TreeNode)
export {
  MedLayout,
  MedLayoutHeader,
  MedLayoutContent,
  MedLayoutSider,
  MedLayoutFooter
}
