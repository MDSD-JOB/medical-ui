import MedTimeline from './src'
import MedTimelineItem from './src/item'
MedTimeline.install = Vue => Vue.component(MedTimeline.name, MedTimeline)
MedTimeline.install = Vue =>
  Vue.component(MedTimeline.TreeNode.name, MedTimeline.TreeNode)
MedTimelineItem.install = Vue =>
  Vue.component(MedTimelineItem.name, MedTimelineItem)
MedTimelineItem.install = Vue =>
  Vue.component(MedTimelineItem.TreeNode.name, MedTimelineItem.TreeNode)
export { MedTimeline, MedTimelineItem }
