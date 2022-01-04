import MedButton from './MedButton/index.js'
import MedIcon from './MedIcon/index.js'
import MedAffix from './MedAffix/index.js'
import { MedBreadcrumb, MedBreadcrumbItem } from './MedBreadcrumb/index.js'
import { MedMenu, MedMenuItem, MedSubMenu } from './MedMenu/index.js'

import MedRadio from './MedRadio/index.js'
import MedCheckbox from './MedCheckbox/index.js'
import MedForm from './MedForm/index.js'
import MedFormModel from './MedFormModel/index.js'
import MedCard from './MedCard/index.js'
import MedPin from './MedPin/index.js'
import MedTable from './MedTable/index.js'
import MedModal from './MedModal/index.js'
import MedTransfer from './MedTransfer/index.js'

const components = {
  MedButton,
  MedIcon,
  MedAffix,
  MedBreadcrumb,
  MedBreadcrumbItem,
  MedMenu,
  MedMenuItem,
  MedSubMenu,

  MedRadio,
  MedCheckbox,
  MedForm,
  MedFormModel,
  MedCard,
  MedPin,
  MedTable,
  MedModal,
  MedTransfer
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
  MedIcon,
  MedAffix,
  MedBreadcrumb,
  MedBreadcrumbItem,
  MedMenu,
  MedMenuItem,
  MedSubMenu,
  MedRadio,
  MedCheckbox,
  MedForm,
  MedFormModel,
  MedCard,
  MedPin,
  MedTable,
  MedModal,
  MedTransfer
}
