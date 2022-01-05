import MedMenu from './src'
import MedMenuItem from './src/item'
import MedSubMenu from './src/sub'
import MedMenuItemGroup from './src/group'
import MedMenuDivider from './src/divider'
MedMenu.install = Vue => Vue.component(MedMenu.name, MedMenu)
MedMenuItem.install = Vue => Vue.component(MedMenuItem.name, MedMenuItem)
MedSubMenu.install = Vue => Vue.component(MedSubMenu.name, MedSubMenu)
MedMenuItemGroup.install = Vue =>
  Vue.component(MedMenuItemGroup.name, MedMenuItemGroup)
MedMenuDivider.install = Vue =>
  Vue.component(MedMenuDivider.name, MedMenuDivider)
MedMenu.install = Vue => Vue.component(MedMenu.TreeNode.name, MedMenu.TreeNode)
MedMenuItem.install = Vue =>
  Vue.component(MedMenuItem.TreeNode.name, MedMenuItem.TreeNode)
MedSubMenu.install = Vue =>
  Vue.component(MedSubMenu.TreeNode.name, MedSubMenu.TreeNode)
MedMenuItemGroup.install = Vue =>
  Vue.component(MedMenuItemGroup.TreeNode.name, MedMenuItemGroup.TreeNode)
export { MedMenu, MedMenuItem, MedSubMenu, MedMenuItemGroup, MedMenuDivider }
