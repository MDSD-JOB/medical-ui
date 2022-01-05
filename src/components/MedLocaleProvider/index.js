import MedLocaleProvider from './src'
MedLocaleProvider.install = Vue =>
  Vue.component(MedLocaleProvider.name, MedLocaleProvider)
export default MedLocaleProvider
