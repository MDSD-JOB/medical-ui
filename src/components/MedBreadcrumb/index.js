import MedBreadcrumb from './src'
import MedBreadcrumbItem from './src/item'
MedBreadcrumb.install = Vue => Vue.component(MedBreadcrumb.name, MedBreadcrumb)
MedBreadcrumbItem.install = Vue =>
  Vue.component(MedBreadcrumbItem.name, MedBreadcrumbItem)
export { MedBreadcrumb, MedBreadcrumbItem }
