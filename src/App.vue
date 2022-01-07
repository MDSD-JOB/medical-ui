<template>
  <div id="app">
    <h1>----------------------按钮------------------------<br /></h1>
    <med-button
      type="primary"
      @click="handleClick"
      width="300px"
      :timeout="1000"
      >按钮点我</med-button
    >
    <div />
    <h1>----------------------Icon------------------------<br /></h1>
    <med-icon
      prefix="anticon"
      url="/icon/iconfont.js"
      type="icon_daoruhuanzhe"
      style="fontSize:32px;"
    />
    <med-icon type="search" style="fontSize:32px;color:red;" spin />
    <div />
    <h1>----------------------间距------------------------<br /></h1>
    <med-space direction="vertical">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </med-space>
    <div />
    <h1>----------------------栅格------------------------<br /></h1>
    <demo-grid />
    <div />
    <h1>----------------------评分------------------------<br /></h1>
    <med-rate />
    <div />
    <h1>----------------------输入框------------------------<br /></h1>
    <med-input placeholder="Basic usage" />
    <div />
    <h1>----------------------单选框------------------------<br /></h1>
    <demo-radio />
    <div />
    <h1>----------------------复选框------------------------<br /></h1>
    <demo-checkbox />
    <h1>----------------------提及------------------------<br /></h1>
    <DemoMentions />
    <h1>----------------------树选择------------------------<br /></h1>
    <DemoTreeSelect />
    <div />
    <h1>----------------------时间选择------------------------<br /></h1>
    <med-time-picker />
    <div />
    <h1>----------------------滑动输入条------------------------<br /></h1>
    <med-slider :default-value="30" />
    <div />
    <h1>----------------------开关------------------------<br /></h1>
    <med-switch />
    <div />
    <h1>----------------------穿梭框------------------------<br /></h1>
    <demo-transfer />
    <div />
    <h1>----------------------数字输入框------------------------<br /></h1>
    <med-input-number />
    <div />
    <h1>----------------------上传------------------------<br /></h1>
    <demo-upload />
    <div />
    <h1>----------------------级联选择------------------------<br /></h1>
    <med-cascader :options="cascaderoptions" placeholder="Please select" />
    <div />
    <h1>----------------------提示------------------------<br /></h1>
    <med-alert message="Warning text" banner />
    <div />
    <h1>----------------------文字提示------------------------<br /></h1>
    <med-tooltip>
      <template slot="title">
        prompt text
      </template>
      Tooltip will show when mouse enter.
    </med-tooltip>
    <div />

    <h1>----------------------气泡卡片------------------------<br /></h1>
    <med-popover title="Title">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <a-button type="primary">
        Hover me
      </a-button>
    </med-popover>
    <div />
    <h1>----------------------布局------------------------<br /></h1>
    <DemoLayout />
    <div />
    <h1>----------------------固钉------------------------<br /></h1>
    <med-affix :offset-top="10">
      <med-button @click="showNoti">固钉</med-button>
    </med-affix>
    <div />
    <h1>----------------------头像------------------------<br /></h1>
    <med-avatar size="large" icon="user" />
    <div />
    <h1>----------------------统计数据------------------------<br /></h1>
    <med-statistic
      title="Active Users"
      :value="112893"
      style="margin-right: 50px"
    />
    <med-statistic-countdown
      title="Countdown"
      :value="Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30"
    />
    <div />
    <h1>----------------------列表------------------------<br /></h1>
    <DemoList />
    <div />
    <h1>----------------------走马灯------------------------<br /></h1>
    <demo-carousel />
    <div />
    <h1>----------------------日历------------------------<br /></h1>
    <med-calendar size="large" icon="user" />
    <div />
    <h1>----------------------描述------------------------<br /></h1>
    <med-descriptions title="User Info">
      <med-descriptions-item label="UserName">
        Zhou Maomao
      </med-descriptions-item>
      <med-descriptions-item label="Telephone">
        1810000000
      </med-descriptions-item>
      <med-descriptions-item label="Live">
        Hangzhou, Zhejiang
      </med-descriptions-item>
      <med-descriptions-item label="Remark">
        empty
      </med-descriptions-item>
      <med-descriptions-item label="Address">
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </med-descriptions-item>
    </med-descriptions>
    <div />
    <h1>----------------------卡片------------------------<br /></h1>
    <med-card title="Default size card" style="width: 300px">
      <a slot="extra" href="#">more</a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </med-card>
    <div />

    <h1>----------------------徽标------------------------<br /></h1>
    <med-badge count="5">
      <a href="#" class="head-example">asdasdasd</a>
    </med-badge>
    <div />
    <h1>----------------------抽屉------------------------<br /></h1>
    <med-button type="primary" @click="drawvisible = true">
      Open
    </med-button>
    <med-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="drawvisible"
      @close="drawvisible = false"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </med-drawer>
    <div />
    <h1>----------------------骨架屏------------------------<br /></h1>
    <med-skeleton active />
    <div />
    <h1>----------------------加载------------------------<br /></h1>
    <med-spin />
    <div />
    <h1>----------------------空状态------------------------<br /></h1>
    <med-empty />
    <div />
    <h1>----------------------面包屑------------------------<br /></h1>
    <med-breadcrumb separator=">">
      <med-breadcrumb-item>Home </med-breadcrumb-item>
      <med-breadcrumb-item>
        <a href="">Application Center</a>
      </med-breadcrumb-item>
      <med-breadcrumb-item>
        <a href="">Application List</a>
      </med-breadcrumb-item>
      <med-breadcrumb-item>An Application</med-breadcrumb-item>
    </med-breadcrumb>
    <div />
    <h1>----------------------菜单------------------------<br /></h1>
    <DemoMenu />
    <div />
    <h1>----------------------确认框------------------------<br /></h1>
    <med-popconfirm
      title="Are you sure delete this task?"
      ok-text="Yes"
      cancel-text="No"
    >
      <a href="#">Delete</a>
    </med-popconfirm>
    <div />
    <h1>----------------------折叠面板------------------------<br /></h1>
    <DemoCollapse />
    <div />
    <h1>----------------------评论------------------------<br /></h1>
    <DemoComment />
    <div />
    <h1>----------------------下拉菜单------------------------<br /></h1>
    <DemoDropdown />
    <div />
    <h1>----------------------页头------------------------<br /></h1>
    <med-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="Title"
      sub-title="This is a subtitle"
      @back="() => null"
    />
    <div />
    <h1>----------------------全局化配置------------------------<br /></h1>
    <med-config-provider :locale="enUS">
      <med-pagination :default-current="1" :total="50" show-size-changer />
    </med-config-provider>
    <div />
    <h1>----------------------回到顶部------------------------<br /></h1>
    <med-back-top />
    <div />
    <h1>----------------------分割线------------------------<br /></h1>
    <med-divider type="vertical" />
    <a href="#">Link</a>
    <med-divider type="vertical" />
    <a href="#">Link</a>
    <div />
    <h1>----------------------分页------------------------<br /></h1>
    <med-pagination :total="50" show-less-items />
    <div />
    <h1>----------------------自动完成------------------------<br /></h1>
    <DemoAutoComplete />
    <div />
    <h1>----------------------下拉框------------------------<br /></h1>
    <med-select default-value="lucy" style="width: 120px">
      <med-select-option value="jack">
        Jack
      </med-select-option>
      <med-select-option value="lucy">
        Lucy
      </med-select-option>
      <med-select-option value="disabled" disabled>
        Disabled
      </med-select-option>
      <med-select-option value="Yiminghe">
        yiminghe
      </med-select-option>
    </med-select>
    <med-select default-value="lucy" style="width: 120px" disabled>
      <med-select-option value="lucy">
        Lucy
      </med-select-option>
    </med-select>
    <med-select default-value="lucy" style="width: 120px" loading>
      <med-select-option value="lucy">
        Lucy
      </med-select-option>
    </med-select>
    <div />
    <h1>----------------------标签------------------------<br /></h1>
    <med-tag>Tag 1</med-tag>
    <div />
    <h1>----------------------时间轴------------------------<br /></h1>
    <med-timeline>
      <med-timeline-item>Create a services site 2015-09-01</med-timeline-item>
      <med-timeline-item
        >Solve initial network problems 2015-09-01</med-timeline-item
      >
      <med-timeline-item>Technical testing 2015-09-01</med-timeline-item>
      <med-timeline-item
        >Network problems being solved 2015-09-01</med-timeline-item
      >
    </med-timeline>
    <div />
    <h1>----------------------树形------------------------<br /></h1>
    <DemoTree />
    <div />
    <h1>----------------------进度条------------------------<br /></h1>
    <med-progress :percent="30" />
    <med-progress :percent="50" status="active" />
    <med-progress :percent="70" status="exception" />
    <med-progress :percent="100" />
    <med-progress :percent="50" :show-info="false" />
    <div />
    <h1>----------------------结果------------------------<br /></h1>
    <med-result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    >
      <template #extra>
        <med-button key="console" type="primary">
          Go Console
        </med-button>
        <med-button key="buy">
          Buy Again
        </med-button>
      </template>
    </med-result>
    <med-result
      status="403"
      title="403"
      sub-title="Sorry, you are not authorized to access this page."
    >
      <template #extra>
        <med-button type="primary">
          Back Home
        </med-button>
      </template>
    </med-result>
    <div />
    <h1>----------------------步骤条------------------------<br /></h1>
    <med-steps>
      <med-step>
        <!-- <span slot="title">Finished</span> -->
        <template slot="title">
          Finished
        </template>
        <span slot="description">This is a description.</span>
      </med-step>
      <med-step
        title="In Progress"
        sub-title="Left 00:00:08"
        description="This is a description."
      />
      <med-step title="Waiting" description="This is a description." />
    </med-steps>
    <div />
    <h1>----------------------锚点------------------------<br /></h1>
    <med-anchor>
      <med-anchor-link
        href="#components-anchor-demo-basic"
        title="Basic demo"
      />
      <med-anchor-link
        href="#components-anchor-demo-static"
        title="Static demo"
      />
      <med-anchor-link
        href="#components-anchor-demo-basic"
        title="Basic demo with Target"
        target="_blank"
      />
      <med-anchor-link href="#API" title="API">
        <med-anchor-link href="#Anchor-Props" title="Anchor Props" />
        <med-anchor-link href="#Link-Props" title="Link Props" />
      </med-anchor-link>
    </med-anchor>
    <div />
    <h1>----------------------穿梭框------------------------<br /></h1>
    <demo-s-transfer />
    <div />
    <h1>----------------------标签页------------------------<br /></h1>
    <med-tabs default-active-key="1">
      <med-tab-pane key="1" tab="Tab 1">
        Content of Tab Pane 1
      </med-tab-pane>
      <med-tab-pane key="2" tab="Tab 2" force-render>
        Content of Tab Pane 2
      </med-tab-pane>
      <med-tab-pane key="3" tab="Tab 3">
        Content of Tab Pane 3
      </med-tab-pane>
    </med-tabs>
    <div />

    <h1>----------------------弹层------------------------<br /></h1>
    <med-button @click="showModal = true">展示</med-button>
    <demo-modal
      v-if="showModal"
      :showModal="showModal"
      @cancel="showModal = false"
    />
    <med-modal title="我是标题" :visible="false">
      <p>12312312312312</p>
    </med-modal>
    ---------------------------------------------<br />
    <h1>表单</h1>
    <demo-form></demo-form>
    ---------------------------------------------<br />
    <h1>表单（v-model）</h1>
    <demo-form-model />
    <h1>----------------------表格------------------------<br /></h1>
    <demo-s-table ref="tables" />
    <div />
    <h1>----------------------表格222------------------------<br /></h1>
    <demo-table />
    <div />
    <h1>按钮</h1>
    <med-button @click="loadDatas" icon="search">
      按钮
    </med-button>
    ---------------------------------------------<br />
    <h1>单选框</h1>
    <med-s-radio buttonType :optionList="radioList" v-model="radioMOdel" />
    ---------------------------------------------<br />
    <h1>卡片</h1>
    <demo-card />
    ----------------------------------------------<br />
    <h1>卡贴</h1>
    <med-button @click="resetPin">重置</med-button>
    <med-pin
      width="200px"
      layout="bottom"
      title="bottom"
      checked
      titleBg="red"
      num="123"
    >
      <template #extra>2级</template>
    </med-pin>
    <med-pin
      width="200px"
      layout="left"
      title="left"
      num="123"
      @click="pinClick"
    >
    </med-pin>
    <med-pin
      layout="blank"
      title="血压"
      unit="oc"
      num="1"
      :hoverable="true"
      titleBg="yellow"
      bordered
      checked
    >
      <a-statistic :value="1" suffix="分" style="margin-right: 50px" />
      <p>床评分</p>
      <div class="badge">
        一级
      </div>
    </med-pin>
    <med-pin
      layout="top"
      title="血压"
      unit="oc"
      bodyColor="red"
      :num="lnum"
      :snum="snum"
      twoNumFlag
      @change="tabChange"
    >
    </med-pin>
  </div>
</template>

<script>
import enUS from 'ant-design-vue/es/locale/en_US'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import {
  MedButton,
  MedIcon,
  MedAffix,
  MedInput,
  MedInputNumber,
  MedRate,
  MedSlider,
  MedSwitch,
  MedCascader,
  MedSelect,
  MedSelectOption,
  MedTabs,
  MedTabPane,
  MedStatistic,
  MedTooltip,
  MedStatisticCountdown,
  MedPopover,
  MedEmpty,
  MedDescriptions,
  MedDescriptionsItem,
  MedTag,
  MedTimeline,
  MedTimelineItem,
  MedTimePicker,
  MedCard,
  MedCalendar,
  MedAvatar,
  MedBadge,
  MedPopconfirm,
  MedProgress,
  MedResult,
  MedSkeleton,
  MedSpin,
  MedDrawer,
  MedAlert,
  MedConfigProvider,
  MedDivider,
  MedBreadcrumb,
  MedBreadcrumbItem,
  MedPageHeader,
  MedPagination,
  MedSteps,
  MedStep,
  MedSpace,
  MedAnchor,
  MedAnchorLink,
  MedPin,
  MedSRadio,
  MedBackTop,
  MedModal
} from './components'

import {
  DemoRadio,
  DemoCheckbox,
  DemoTree,
  DemoDropdown,
  DemoMenu,
  DemoSTransfer,
  DemoModal,
  DemoFormModel,
  DemoForm,
  DemoSTable,
  DemoTable,
  DemoCard,
  DemoGrid,
  DemoLayout,
  DemoCarousel,
  DemoCollapse,
  DemoComment,
  DemoList,
  DemoAutoComplete,
  DemoUpload,
  DemoTransfer,
  DemoMentions,
  DemoTreeSelect
} from './views'

export default {
  name: 'App',
  components: {
    MedButton,
    MedIcon,
    MedAffix,
    MedInputNumber,
    MedInput,
    MedRate,
    MedSlider,
    MedSwitch,
    MedCascader,
    MedSelect,
    MedSelectOption,
    MedTabs,
    MedTabPane,
    MedStatistic,
    MedTooltip,
    MedStatisticCountdown,
    MedPopover,
    MedEmpty,
    MedDescriptions,
    MedDescriptionsItem,
    MedCard,
    MedAvatar,
    MedBadge,
    MedCalendar,
    MedPopconfirm,
    MedTag,
    MedTimeline,
    MedTimelineItem,
    MedTimePicker,
    MedProgress,
    MedResult,
    MedDrawer,
    MedSkeleton,
    MedSpin,
    MedAlert,
    MedConfigProvider,
    MedDivider,
    MedBackTop,
    MedBreadcrumb,
    MedBreadcrumbItem,
    MedPageHeader,
    MedPagination,
    MedSteps,
    MedStep,
    MedSpace,
    MedAnchor,
    MedAnchorLink,
    MedPin,
    MedModal,
    MedSRadio,
    DemoTree,
    DemoDropdown,
    DemoMenu,
    DemoSTransfer,
    DemoModal,
    DemoFormModel,
    DemoForm,
    DemoSTable,
    DemoTable,
    DemoCard,
    DemoGrid,
    DemoLayout,
    DemoCarousel,
    DemoCollapse,
    DemoComment,
    DemoList,
    DemoAutoComplete,
    DemoUpload,
    DemoTransfer,
    DemoRadio,
    DemoCheckbox,
    DemoMentions,
    DemoTreeSelect
  },
  data() {
    return {
      radioMOdel: '2',
      lnum: '123',
      snum: '456',
      value: '',
      dataSourcess: [],
      showModal: false,
      tabList: [
        {
          key: 'tab1',
          tab: 'tab1'
        },
        {
          key: 'tab2',
          tab: 'tab2'
        }
      ],
      radioList: [],
      drawvisible: false,
      enUS,
      zhCN,
      cascaderoptions: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake'
                }
              ]
            }
          ]
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  watch: {
    value(val) {
      console.log('value', val)
    }
  },
  created() {
    this.getARR()
  },
  methods: {
    showNoti() {
      this.$notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
          console.log('Notification Clicked!')
        }
      })
    },
    resetPin() {
      this.radioMOdel = '2'
      this.lnum = ''
    },
    onSearch(searchText) {
      this.dataSourcess = !searchText
        ? []
        : [searchText, searchText.repeat(2), searchText.repeat(3)]
    },
    onSelect(val1, val2, val3) {
      console.log(val1, val2, val3)
    },
    tabChange(num, snum) {
      this.lnum = num
      this.snum = snum
      console.log('接收到：', num, snum)
    },
    pinClick() {
      console.log('pinClick')
    },
    loadDatas() {
      setTimeout(() => {
        this.$refs.tables.$refs.tables.refresh()
      }, 1000)
    },
    handleClick() {
      console.log(1111)
    },
    async getARR() {
      this.radioList = [
        { label: '选项1', value: '0', checked: true },
        { label: '选项2', value: '1', disabled: true },
        { label: '选项2', value: '2' },
        { label: '选项2', value: '3' },
        { label: '选项2', value: '4' },
        { label: '选项2', value: '5' }
      ]
    }
  }
}
</script>
