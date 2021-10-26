import MedButton from './MedButton/index.js'
import MedRadio from './MedRadio/index.js'
import MedCheckbox from './MedCheckbox/index.js'
import MedForm from './MedForm/index.js'
import MedFormModel from './MedFormModel/index.js'
import MedCard from './MedCard/index.js'
import MedPin from './MedPin/index.js'
import MedTable from './MedTable/index.js'
import MedModal from './MedModal/index.js'
import MedTransfer from './MedTransfer/index.js'
import MedUpload from './MedUpload/index.js'
import MedPdf from './MedPdf/index.js'

const components = {
  MedButton,
  MedRadio,
  MedCheckbox,
  MedForm,
  MedFormModel,
  MedCard,
  MedPin,
  MedTable,
  MedModal,
  MedTransfer,
  MedUpload,
  MedPdf
}

const install = function(Vue) {
  if (install.installed) return
  install.installed = true
  Object.values(components).map(component => {
    Vue.component(component.name, component)
  })
}

/** 支持使用标签方式引入 */
if (typeof window != 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
export {
  MedButton,
  MedRadio,
  MedCheckbox,
  MedForm,
  MedFormModel,
  MedCard,
  MedPin,
  MedTable,
  MedModal,
  MedTransfer,
  MedUpload,
  MedPdf
}
