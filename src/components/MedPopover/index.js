import MedPopover from './src'
MedPopover.install = Vue => Vue.component(MedPopover.name, MedPopover)
MedPopover.install = Vue =>
  Vue.component(MedPopover.TreeNode.name, MedPopover.TreeNode)
export default MedPopover
