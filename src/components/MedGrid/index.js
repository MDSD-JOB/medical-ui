import MedRow from './src/row'
import MedCol from './src/col'
MedRow.install = Vue => Vue.component(MedRow.name, MedRow)
MedRow.install = Vue => Vue.component(MedRow.TreeNode.name, MedRow.TreeNode)
MedCol.install = Vue => Vue.component(MedCol.name, MedCol)
MedCol.install = Vue => Vue.component(MedCol.TreeNode.name, MedCol.TreeNode)
export { MedRow, MedCol }
