<template>
  <div id="app">
    ----------------------------------------------<br />
    <h1>上传</h1>
    <demo-upload></demo-upload>
    ----------------------------------------------<br />
    <h1>穿梭框</h1>
    <demo-transfer></demo-transfer>
    ----------------------------------------------<br />
    <h1>弹层</h1>
    <med-button @click="showModal = true">展示</med-button>
    <demo-modal
      v-if="showModal"
      :showModal="showModal"
      @cancel="showModal = false"
    ></demo-modal>
    ---------------------------------------------<br />
    <h1>表单</h1>
    <demo-form></demo-form>
    ---------------------------------------------<br />
    <h1>表单（v-model）</h1>
    <demo-form-model></demo-form-model>
    ---------------------------------------------<br />
    <h1>表格</h1>
    <demo-table ref="tables"></demo-table>
    ---------------------------------------------<br />
    <h1>按钮</h1>
    <med-button @click="loadDatas" icon="search">
      按钮
    </med-button>
    ---------------------------------------------<br />
    <h1>单选框</h1>
    <med-radio buttonType :optionList="radioList" initialValue="0"></med-radio>
    ---------------------------------------------<br />
    <h1>卡片</h1>
    <med-card width="300px" title="123" :bordered="false" loading>
      <div>123</div>
      <template #extra>adasdad</template>
      <med-pin title="嵌套在card" num="嵌套在card"></med-pin>
    </med-card>

    <br />

    <med-card
      width="300px"
      :tabList="[
        { tab: 'tab1', key: 'tab1' },
        { tab: 'tab2', key: 'tab2' }
      ]"
      activeTabKey="tab1"
    >
      <div>tab卡片</div>
      <template #extra>adasdad</template>
    </med-card>

    <br />

    <med-card width="300px">
      简介卡片
      <template #extra>adasdad</template>
    </med-card>
    ----------------------------------------------<br />
    <h1>卡贴</h1>
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
    />
    <med-pin
      layout="top"
      title="血压"
      unit="oc"
      bodyColor="red"
      num="122"
      snum="321"
      @change="change"
    >
    </med-pin>
  </div>
</template>

<script>
import { MedButton, MedCard, MedPin, MedRadio } from './components'

import {
  DemoTransfer,
  DemoModal,
  DemoFormModel,
  DemoForm,
  DemoTable,
  DemoUpload
} from './views'

export default {
  name: 'App',
  components: {
    MedButton,
    MedCard,
    MedPin,
    MedRadio,
    DemoTransfer,
    DemoModal,
    DemoFormModel,
    DemoForm,
    DemoTable,
    DemoUpload
  },
  data() {
    return {
      snum: '',
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
      radioList: []
    }
  },
  created() {
    this.getARR()
  },
  methods: {
    change(num, snum) {
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
    async getARR() {
      // const res =
      this.radioList = [
        { label: '选项1', value: '0' },
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
