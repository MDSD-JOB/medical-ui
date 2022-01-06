import MedTabs from './src'
import MedTabPane from './src/pane'
import MedTabContent from './src/content'
MedTabs.install = Vue => Vue.component(MedTabs.name, MedTabs)
MedTabs.install = Vue => Vue.component(MedTabs.TreeNode.name, MedTabs.TreeNode)
MedTabPane.install = Vue => Vue.component(MedTabPane.name, MedTabPane)
MedTabPane.install = Vue =>
  Vue.component(MedTabPane.TreeNode.name, MedTabPane.TreeNode)
MedTabContent.install = Vue => Vue.component(MedTabContent.name, MedTabContent)
MedTabContent.install = Vue =>
  Vue.component(MedTabContent.TreeNode.name, MedTabContent.TreeNode)
export { MedTabs, MedTabPane, MedTabContent }
