import MedCard from './src'
import MedCardGrid from './src/grid'
import MedCardMeta from './src/meta'
MedCard.install = Vue => Vue.component(MedCard.name, MedCard)
MedCard.install = Vue => Vue.component(MedCard.TreeNode.name, MedCard.TreeNode)
MedCardGrid.install = Vue => Vue.component(MedCardGrid.name, MedCardGrid)
MedCardGrid.install = Vue =>
  Vue.component(MedCardGrid.TreeNode.name, MedCardGrid.TreeNode)
MedCardMeta.install = Vue => Vue.component(MedCardMeta.name, MedCardMeta)
MedCardMeta.install = Vue =>
  Vue.component(MedCardMeta.TreeNode.name, MedCardMeta.TreeNode)
export { MedCard, MedCardGrid, MedCardMeta }
