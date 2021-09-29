<template>
  <div id="app">
    <med-table
      rowKey="key"
      :rowClassName="rowClassName"
      :columns="columns"
      :dataSource="loadData"
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange
      }"
      :showPagination="null"
      @expand="expand"
    >
      <a slot="name" slot-scope="text">{{ text }} 123</a>
      <template v-slot:customTitle><a-icon type="smile-o" /> Name</template>
    </med-table>

    ---------------------------------------------<br />
    <med-button>button</med-button>
    ---------------------------------------------<br />
    <med-form
      :responsive="responsive"
      :dataSource="dataSource"
      :maxItem="2"
      @submit="submit"
      layout="inline"
    >
    </med-form>
    ---------------------------------------------<br />
    <med-form-model
      showBtn
      ref="form"
      :form="form"
      :dataSource="dataSource"
      :responsive="responsive"
      @submit="submit"
    >
      <template v-slot:footer="">
        <med-button @click="submitdiy">提交</med-button>
      </template>
    </med-form-model>
    ---------------------------------------------<br />
    1111111
    <med-radio buttonType :optionList="radioList"></med-radio>
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
      expandedRowKeys: ['age'], // expand事件必传
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
      loadData: parameter => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        console.log('请求参数：', requestParameters)
        return Promise.resolve({
          pageNo: 1,
          pageSize: 10,
          totalCount: 50,
          result: list
        })
      },
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
      list,
      radioList: []
    }
  },
  created() {
    this.getARR()
  },
  methods: {
    async getARR() {
      // const res =
      this.radioList = [
        { label: '选项1', value: '0' },
        { label: '选项2', value: '1' },
        { label: '选项2', value: '1' },
        { label: '选项2', value: '1' },
        { label: '选项2', value: '1' },
        { label: '选项2', value: '1' }
      ]
    },
    rowClassName(record, index) {
      let className = 'light-row'
      if (index % 2 === 1) className = 'dark-row'
      return className
    },
    // 表单
    submit(data) {
      console.log('form Submit', data)
    },
    submitdiy() {
      this.$refs.form.$refs.ruleForm.validate(valid => {
        console.log(valid)
      })
    },
    // 表格
    expand(expanded, row, index) {
      console.log('expand', expanded, row, index, this.expandedRowKeys)
    },
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys
    }
  }
}
</script>

<style lang="less">
.light-row {
  background-color: #fff;
}
.dark-row {
  background-color: #fafafa;
}
</style>
