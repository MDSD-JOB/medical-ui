import MedList from './src'
import MedListItem from './src/item'
import MedListItemMeta from './src/meta'
MedList.install = Vue => Vue.component(MedList.name, MedList)
MedList.install = Vue => Vue.component(MedList.TreeNode.name, MedList.TreeNode)
MedListItem.install = Vue => Vue.component(MedListItem.name, MedListItem)
MedListItem.install = Vue =>
  Vue.component(MedListItem.TreeNode.name, MedListItem.TreeNode)
MedListItemMeta.install = Vue =>
  Vue.component(MedListItemMeta.name, MedListItemMeta)
MedListItemMeta.install = Vue =>
  Vue.component(MedListItemMeta.TreeNode.name, MedListItemMeta.TreeNode)
export { MedList, MedListItem, MedListItemMeta }
