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
    <h1>----------------------栅格------------------------<br /></h1>
    <med-alert message="Warning text" banner />
    <div />

    <h1>----------------------布局------------------------<br /></h1>
    <DemoLayout />
    <div />
    <h1>----------------------固钉------------------------<br /></h1>
    <med-affix :offset-top="10">
      <med-button @click="showNoti">固钉</med-button>
    </med-affix>
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
    <demo-transfer />
    ----------------------------------------------<br />
    <h1>弹层</h1>
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
    ---------------------------------------------<br />
    <h1>表格</h1>
    <demo-table ref="tables" />
    ---------------------------------------------<br />
    <h1>按钮</h1>
    <med-button @click="loadDatas" icon="search">
      按钮
    </med-button>
    ---------------------------------------------<br />
    <h1>单选框</h1>
    <med-radio buttonType :optionList="radioList" v-model="radioMOdel" />
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
  MedRadio,
  MedBackTop,
  MedModal
} from './components'

import {
  DemoDropdown,
  DemoMenu,
  DemoTransfer,
  DemoModal,
  DemoFormModel,
  DemoForm,
  DemoTable,
  DemoCard,
  DemoGrid,
  DemoLayout
} from './views'

export default {
  name: 'App',
  components: {
    MedButton,
    MedIcon,
    MedAffix,
    MedPopconfirm,
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
    MedRadio,
    DemoDropdown,
    DemoMenu,
    DemoTransfer,
    DemoModal,
    DemoFormModel,
    DemoForm,
    DemoTable,
    DemoCard,
    DemoGrid,
    DemoLayout
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
      zhCN
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
