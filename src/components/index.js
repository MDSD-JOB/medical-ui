import { MedButton, MedButtonGroup } from './MedButton/index.js'
import MedIcon from './MedIcon/index.js'
import MedAffix from './MedAffix/index.js'
import {
  MedBreadcrumb,
  MedBreadcrumbItem,
  MedBreadcrumbSeparator
} from './MedBreadcrumb/index.js'
import {
  MedMenu,
  MedMenuItem,
  MedSubMenu,
  MedMenuItemGroup,
  MedMenuDivider
} from './MedMenu/index.js'
import { MedDropdown, MedDropdownButton } from './MedDropdown/index.js'
import MedPageHeader from './MedPageHeader/index.js'
import MedPagination from './MedPagination/index.js'
import { MedSteps, MedStep } from './MedSteps/index.js'
import MedSpace from './MedSpace/index.js'
import { MedRow, MedCol } from './MedGrid/index.js'
import {
  MedLayout,
  MedLayoutHeader,
  MedLayoutContent,
  MedLayoutSider,
  MedLayoutFooter
} from './MedLayout/index.js'
import { MedAnchor, MedAnchorLink } from './MedAnchor/index.js'
import MedBackTop from './MedBackTop/index.js'
import MedDivider from './MedDivider/index.js'
import MedConfigProvider from './MedConfigProvider/index.js'
import MedLocaleProvider from './MedLocaleProvider/index.js'

import MedRadio from './MedRadio/index.js'
import MedCheckbox from './MedCheckbox/index.js'
import MedForm from './MedForm/index.js'
import MedFormModel from './MedFormModel/index.js'
import MedCard from './MedCard/index.js'
import MedPin from './MedPin/index.js'
import MedTable from './MedTable/index.js'
import MedModal from './MedModal/index.js'
import MedTransfer from './MedTransfer/index.js'
import MedAlert from './MedAlert/index.js'
import MedDrawer from './MedDrawer/index.js'
import MedSkeleton from './MedSkeleton/index.js'
import MedSpin from './MedSpin/index.js'
import MedResult from './MedResult/index.js'
import MedProgress from './MedProgress/index.js'
import MedPopconfirm from './MedPopconfirm/index.js'

const components = {
  MedButton,
  MedButtonGroup,
  MedIcon,
  MedAffix,
  MedProgress,
  MedPopconfirm,
  MedModal,
  MedResult,
  MedSkeleton,
  MedSpin,
  MedDrawer,
  MedAlert,
  MedDivider,
  MedConfigProvider,
  MedLocaleProvider,
  MedBreadcrumb,
  MedBreadcrumbItem,
  MedBreadcrumbSeparator,
  MedDropdown,
  MedDropdownButton,
  MedMenu,
  MedMenuItem,
  MedSubMenu,
  MedMenuItemGroup,
  MedMenuDivider,
  MedPageHeader,
  MedPagination,
  MedSteps,
  MedStep,
  MedSpace,
  MedAnchor,
  MedAnchorLink,
  MedBackTop,
  MedRow,
  MedCol,
  MedLayout,
  MedLayoutHeader,
  MedLayoutContent,
  MedLayoutSider,
  MedLayoutFooter,

  MedRadio,
  MedCheckbox,
  MedForm,
  MedFormModel,
  MedCard,
  MedPin,
  MedTable,
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
  MedButtonGroup,
  MedIcon,
  MedAffix,
  MedProgress,
  MedPopconfirm,
  MedModal,
  MedResult,
  MedSkeleton,
  MedSpin,
  MedDrawer,
  MedAlert,
  MedDivider,
  MedConfigProvider,
  MedLocaleProvider,
  MedBreadcrumb,
  MedBreadcrumbItem,
  MedBreadcrumbSeparator,
  MedDropdown,
  MedDropdownButton,
  MedMenu,
  MedMenuItem,
  MedSubMenu,
  MedMenuItemGroup,
  MedMenuDivider,
  MedPageHeader,
  MedPagination,
  MedSteps,
  MedStep,
  MedSpace,
  MedAnchor,
  MedAnchorLink,
  MedBackTop,
  MedRow,
  MedCol,
  MedLayout,
  MedLayoutHeader,
  MedLayoutContent,
  MedLayoutSider,
  MedLayoutFooter,
  MedRadio,
  MedCheckbox,
  MedForm,
  MedFormModel,
  MedCard,
  MedPin,
  MedTable,
  MedTransfer
}
