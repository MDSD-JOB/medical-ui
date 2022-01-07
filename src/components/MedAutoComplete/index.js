import MedAutoComplete from './src'
import MedAutoCompleteOption from './src/option'
import MedAutoCompleteOptGroup from './src/optGroup'
MedAutoComplete.install = Vue =>
  Vue.component(MedAutoComplete.name, MedAutoComplete)
MedAutoComplete.install = Vue =>
  Vue.component(MedAutoComplete.TreeNode.name, MedAutoComplete.TreeNode)
MedAutoCompleteOption.install = Vue =>
  Vue.component(MedAutoCompleteOption.name, MedAutoCompleteOption)
MedAutoCompleteOption.install = Vue =>
  Vue.component(
    MedAutoCompleteOption.TreeNode.name,
    MedAutoCompleteOption.TreeNode
  )
MedAutoCompleteOptGroup.install = Vue =>
  Vue.component(MedAutoCompleteOptGroup.name, MedAutoCompleteOptGroup)
MedAutoCompleteOptGroup.install = Vue =>
  Vue.component(
    MedAutoCompleteOptGroup.TreeNode.name,
    MedAutoCompleteOptGroup.TreeNode
  )
export { MedAutoComplete, MedAutoCompleteOption, MedAutoCompleteOptGroup }
