import { MedButton, MedButtonGroup } from './MedButton/index.js'
import MedIcon from './MedIcon/index.js'
import MedAffix from './MedAffix/index.js'
import MedPopover from './MedPopover/index.js'
import MedEmpty from './MedEmpty/index.js'
import MedComment from './MedComment/index.js'
import MedAvatar from './MedAvatar/index.js'
import MedBadge from './MedBadge/index.js'
import MedCalendar from './MedCalendar/index.js'
import MedCarousel from './MedCarousel/index.js'
import MedPageHeader from './MedPageHeader/index.js'
import MedPagination from './MedPagination/index.js'
import MedSpace from './MedSpace/index.js'
import MedBackTop from './MedBackTop/index.js'
import MedDivider from './MedDivider/index.js'
import MedConfigProvider from './MedConfigProvider/index.js'
import MedLocaleProvider from './MedLocaleProvider/index.js'
import MedRadio from './MedRadio/index.js'
import MedCheckbox from './MedCheckbox/index.js'
import MedForm from './MedForm/index.js'
import MedFormModel from './MedFormModel/index.js'
import MedSCard from './MedSCard/index.js'
import MedPin from './MedPin/index.js'
import MedSTable from './MedSTable/index.js'
import MedModal from './MedModal/index.js'
import MedSModal from './MedSModal/index.js'
import MedTransfer from './MedTransfer/index.js'
import MedAlert from './MedAlert/index.js'
import MedDrawer from './MedDrawer/index.js'
import MedSkeleton from './MedSkeleton/index.js'
import MedSpin from './MedSpin/index.js'
import MedResult from './MedResult/index.js'
import MedProgress from './MedProgress/index.js'
import MedPopconfirm from './MedPopconfirm/index.js'
import MedTooltip from './MedTooltip/index.js'
import { MedTree, MedDirectoryTree, MedTreeNode } from './MedTree/index.js'

import { MedRow, MedCol } from './MedGrid/index.js'
import { MedSteps, MedStep } from './MedSteps/index.js'
import { MedTag, MedCheckableTag } from './MedTag/index.js'
import { MedTimeline, MedTimelineItem } from './MedTimeline/index.js'
import { MedTabs, MedTabPane, MedTabContent } from './MedTabs/index.js'
import { MedAnchor, MedAnchorLink } from './MedAnchor/index.js'
import { MedCollapse, MedCollapsePanel } from './MedCollapse/index.js'
import { MedDropdown, MedDropdownButton } from './MedDropdown/index.js'
import { MedStatistic, MedStatisticCountdown } from './MedStatistic/index.js'
import { MedCard, MedCardGrid, MedCardMeta } from './MedCard/index.js'
import { MedList, MedListItem, MedListItemMeta } from './MedList/index.js'
import {
  MedTable,
  MedTableColumn,
  MedTableColumnGroup
} from './MedTable/index.js'
import {
  MedDescriptions,
  MedDescriptionsItem
} from './MedDescriptions/index.js'
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
import {
  MedLayout,
  MedLayoutHeader,
  MedLayoutContent,
  MedLayoutSider,
  MedLayoutFooter
} from './MedLayout/index.js'

const components = {
  MedButton,
  MedButtonGroup,
  MedIcon,
  MedAffix,
  MedTable,
  MedTableColumn,
  MedTableColumnGroup,
  MedTabs,
  MedTabPane,
  MedTag,
  MedCheckableTag,
  MedTimeline,
  MedTimelineItem,
  MedTree,
  MedDirectoryTree,
  MedTreeNode,
  MedTabContent,
  MedPopover,
  MedList,
  MedListItem,
  MedListItemMeta,
  MedStatistic,
  MedTooltip,
  MedStatisticCountdown,
  MedEmpty,
  MedCollapse,
  MedCollapsePanel,
  MedComment,
  MedDescriptions,
  MedDescriptionsItem,
  MedCarousel,
  MedCalendar,
  MedCard,
  MedCardGrid,
  MedCardMeta,
  MedAvatar,
  MedBadge,
  MedProgress,
  MedPopconfirm,
  MedModal,
  MedSModal,
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
  MedSCard,
  MedPin,
  MedSTable,
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
  MedTable,
  MedTableColumn,
  MedTableColumnGroup,
  MedTabs,
  MedTabPane,
  MedTabContent,
  MedTag,
  MedCheckableTag,
  MedTimeline,
  MedTimelineItem,
  MedTree,
  MedDirectoryTree,
  MedTreeNode,
  MedPopover,
  MedList,
  MedListItem,
  MedListItemMeta,
  MedStatistic,
  MedTooltip,
  MedStatisticCountdown,
  MedEmpty,
  MedCollapse,
  MedCollapsePanel,
  MedComment,
  MedDescriptions,
  MedDescriptionsItem,
  MedCarousel,
  MedCard,
  MedCardGrid,
  MedCardMeta,
  MedAvatar,
  MedBadge,
  MedCalendar,
  MedProgress,
  MedPopconfirm,
  MedModal,
  MedSModal,
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
  MedSCard,
  MedPin,
  MedSTable,
  MedTransfer
}
