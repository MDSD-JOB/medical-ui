import MedMenu from './src'
import MedMenuItem from './src/item'
import MedSubMenu from './src/sub'
MedMenu.install = Vue => Vue.component(MedMenu.name, MedMenu)
MedMenuItem.install = Vue => Vue.component(MedMenuItem.name, MedMenuItem)
MedSubMenu.install = Vue => Vue.component(MedSubMenu.name, MedSubMenu)
export { MedMenu, MedMenuItem, MedSubMenu }
