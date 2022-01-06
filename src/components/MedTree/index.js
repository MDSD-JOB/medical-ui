import MedTree from './src'
import MedDirectoryTree from './src/directory'
import MedTreeNode from './src/node'
MedTree.install = Vue => Vue.component(MedTree.name, MedTree)
MedTree.install = Vue => Vue.component(MedTree.TreeNode.name, MedTree.TreeNode)
MedDirectoryTree.install = Vue =>
  Vue.component(MedDirectoryTree.name, MedDirectoryTree)
MedDirectoryTree.install = Vue =>
  Vue.component(MedDirectoryTree.TreeNode.name, MedDirectoryTree.TreeNode)
MedTreeNode.install = Vue => Vue.component(MedTreeNode.name, MedTreeNode)
MedTreeNode.install = Vue =>
  Vue.component(MedTreeNode.TreeNode.name, MedTreeNode.TreeNode)
export { MedTree, MedDirectoryTree, MedTreeNode }
