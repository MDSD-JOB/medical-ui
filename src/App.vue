<template>
  <div id="app">
    <med-table
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange
      }"
      :columns="columns"
      :dataSource="list"
      rowKey="key"
    >
      <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
    </med-table>
    ---------------------------------------------<br />
    <med-button>button</med-button>
    ---------------------------------------------<br />
    <med-form
      :responsive="responsive"
      :dataSource="dataSource"
      :maxItem="1"
      @submit="submit"
      layout="inline"
    >
    </med-form>
    ---------------------------------------------<br />
    <med-form-model
      showBtn
      :form="form"
      :dataSource="dataSource"
      :responsive="responsive"
      @submit="submit"
    >
      <!-- <template #footer>
        <div>
          123
        </div>
      </template> -->
    </med-form-model>
    ---------------------------------------------<br />
    <med-radio
      buttonType
      :optionList="[
        { label: '选项1', value: '0', disabled: true },
        { label: '选项2', value: '1' }
      ]"
    ></med-radio>
    ---------------------------------------------<br />
    <med-card width="300px">
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
      defaultTabKey="tab1"
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
    <med-pin width="200px" layout="bottom" title="bottom">
      <div>
        asasddd adas
      </div>
      <template #extra>2急</template>
    </med-pin>
    <med-pin width="200px" layout="left" title="left">
      <div>
        asasddd adas
      </div>
    </med-pin>
    <med-pin
      layout="top"
      title="血压"
      unit="oc"
      num="1"
      :hoverable="true"
      titleBg="yellow"
      bordered
      checked
    >
    </med-pin>
  </div>
</template>

<script>
import MedTable from './components/MedTable'
import MedForm from './components/MedForm'
import MedFormModel from './components/MedFormModel'
import MedButton from './components/MedButton'
import MedCard from './components/MedCard'
import MedPin from './components/MedPin'
import MedRadio from './components/MedRadio'
import { dataSource, columns, list } from './data'
export default {
  name: 'App',
  components: {
    MedTable,
    MedForm,
    MedFormModel,
    MedButton,
    MedCard,
    MedPin,
    MedRadio
  },
  data() {
    return {
      selectedRowKeys: [],
      form: {
        name: ''
      },
      responsive: {
        xl: 12,
        lg: 12,
        md: 12,
        sm: 24,
        xs: 24
      },
      dataSource,
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
      columns,
      list
    }
  },
  computed: {
    forms() {
      const obj = {}
      const formArr = this.dataSource.map(item => item.fieldName)
      formArr.map(item => (obj[item] = ''))
      return obj
    }
  },
  methods: {
    submit(data) {
      console.log(1111111, data)
    },
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys
    }
  }
}
</script>
