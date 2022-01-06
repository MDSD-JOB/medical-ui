import MedCollapse from './src'
import MedCollapsePanel from './src/panel'
MedCollapse.install = Vue => Vue.component(MedCollapse.name, MedCollapse)
MedCollapse.install = Vue =>
  Vue.component(MedCollapse.TreeNode.name, MedCollapse.TreeNode)
MedCollapsePanel.install = Vue =>
  Vue.component(MedCollapsePanel.name, MedCollapsePanel)
MedCollapsePanel.install = Vue =>
  Vue.component(MedCollapsePanel.TreeNode.name, MedCollapsePanel.TreeNode)
export { MedCollapse, MedCollapsePanel }
