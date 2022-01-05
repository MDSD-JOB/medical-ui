import MedBreadcrumb from './src'
import MedBreadcrumbItem from './src/item'
import MedBreadcrumbSeparator from './src/separator'
MedBreadcrumb.install = Vue => Vue.component(MedBreadcrumb.name, MedBreadcrumb)
MedBreadcrumbItem.install = Vue =>
  Vue.component(MedBreadcrumbItem.name, MedBreadcrumbItem)
MedBreadcrumbSeparator.install = Vue =>
  Vue.component(MedBreadcrumbSeparator.name, MedBreadcrumbSeparator)
MedBreadcrumb.install = Vue =>
  Vue.component(MedBreadcrumb.TreeNode.name, MedBreadcrumb.TreeNode)
MedBreadcrumbItem.install = Vue =>
  Vue.component(MedBreadcrumbItem.TreeNode.name, MedBreadcrumbItem.TreeNode)
MedBreadcrumbSeparator.install = Vue =>
  Vue.component(
    MedBreadcrumbSeparator.TreeNode.name,
    MedBreadcrumbSeparator.TreeNode
  )
export { MedBreadcrumb, MedBreadcrumbItem, MedBreadcrumbSeparator }
