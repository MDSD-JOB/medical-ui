import MedConfigProvider from './src'
MedConfigProvider.install = Vue =>
  Vue.component(MedConfigProvider.name, MedConfigProvider)
export default MedConfigProvider
