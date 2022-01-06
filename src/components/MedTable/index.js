import MedTable from './src'
import MedTableColumn from './src/column'
import MedTableColumnGroup from './src/group'
MedTable.install = Vue => Vue.component(MedTable.name, MedTable)
MedTable.install = Vue =>
  Vue.component(MedTable.TreeNode.name, MedTable.TreeNode)
MedTableColumn.install = Vue =>
  Vue.component(MedTableColumn.name, MedTableColumn)
MedTableColumn.install = Vue =>
  Vue.component(MedTableColumn.TreeNode.name, MedTableColumn.TreeNode)
MedTableColumnGroup.install = Vue =>
  Vue.component(MedTableColumnGroup.name, MedTableColumnGroup)
MedTableColumnGroup.install = Vue =>
  Vue.component(MedTableColumnGroup.TreeNode.name, MedTableColumnGroup.TreeNode)
export { MedTable, MedTableColumn, MedTableColumnGroup }
