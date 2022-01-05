import MedSteps from './src'
import MedStep from './src/step'
MedSteps.install = Vue => Vue.component(MedSteps.name, MedSteps)
MedSteps.install = Vue =>
  Vue.component(MedSteps.TreeNode.name, MedSteps.TreeNode)
MedStep.install = Vue => Vue.component(MedStep.name, MedStep)
MedStep.install = Vue => Vue.component(MedStep.TreeNode.name, MedStep.TreeNode)
export { MedSteps, MedStep }
