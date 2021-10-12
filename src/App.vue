<template>
  <div id="app">
    ----------------------------------------------<br />
    <h1>弹层</h1>
    <med-button @click="visible = true">展示</med-button>
    <med-modal v-model="visible" title="我是标题" @cancel="cancel">
      我是弹层内容
      <template #footer>
        <med-button>自定义按钮</med-button>
      </template>
    </med-modal>
    ---------------------------------------------<br />
    <h1>表单</h1>
    <med-form
      ref="ruleForm"
      layout="inline"
      :responsive="responsive"
      :dataSource="dataSource"
      :maxItem="4"
      @submit="submit"
    />
    ---------------------------------------------<br />
    <h1>表单（v-model）</h1>
    <med-form-model
      ref="form"
      showBtn
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
    <h1>表格</h1>
    <med-table
      ref="tables"
      rowKey="key"
      questNow
      :rowClassName="rowClassName"
      :columns="columns"
      :dataSource="loadData"
      showPagination="auto"
      :pagination="pagination"
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange
      }"
      :scroll="{ x: 1980 }"
      :alert="{
        clear: true,
        delete: true,
        export: true,
        save: true,
        invalid: () => {}
      }"
      @expand="expand"
      @batchOpt="batchOpt"
    >
      <template #msgItem>sss</template>
      <template #alertItem>123221212</template>
      <a slot="name" slot-scope="text">{{ text }} 123</a>
      <template v-slot:customTitle><a-icon type="smile-o" /> Name</template>
      <template #action>
        <div>
          <med-button>操作一</med-button>

          <a-dropdown>
            <a-menu slot="overlay">
              <a-menu-item key="1"> 操作二 </a-menu-item>
              <a-menu-item key="2"> 操作三 </a-menu-item>
              <a-menu-item key="3"> 操作四 </a-menu-item>
            </a-menu>
            <a-button style="margin-left: 8px">
              Button <a-icon type="down" />
            </a-button>
          </a-dropdown>
        </div>
      </template>
    </med-table>
    ---------------------------------------------<br />
    <h1>按钮</h1>
    <med-button @click="loadDatas" icon="search">button</med-button>
    ---------------------------------------------<br />
    <h1>单选框</h1>
    <med-radio buttonType :optionList="radioList"></med-radio>
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
      twoNumFlag
      bodyColor="red"
      num="122"
    >
    </med-pin>
  </div>
</template>

<script>
import {
  MedTable,
  MedForm,
  MedFormModel,
  MedButton,
  MedCard,
  MedPin,
  MedRadio,
  MedModal
} from './components'
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
    MedRadio,
    MedModal
  },
  data() {
    return {
      visible: false,
      pagination: {
        pageNo: 1,
        pageSize: 5,
        total: 0,
        showSizeChanger: true,
        pageSizeOptions: ['5', '10', '20', '50'],
        showTotal: total => `共 ${total} 条`
        // onShowSizeChange: (current, pageSize) =>
        //   this.onSizeChange(current, pageSize),
        // onChange: (page, pageSize) => this.onPageChange(page, pageSize)
      },
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
      queryParam: {},
      loadData: () => {
        // const requestParameters = Object.assign({}, parameter, this.queryParam)
        // console.log('请求参数：', requestParameters)
        return Promise.resolve({
          current: 1,
          size: 10,
          total: 50,
          records: list
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
      radioList: []
    }
  },
  created() {
    this.getARR()
  },
  methods: {
    cancel() {
      console.log(111111111111111)
    },
    pinClick() {
      console.log(1111)
    },
    loadDatas() {
      setTimeout(() => {
        this.$refs.tables.refresh()
      }, 1000)
    },
    onPageChange() {
      console.log(111)
    },
    onSizeChange() {
      console.log(222)
    },
    batchOpt(type, arr) {
      console.log('批量操作', type, arr)
      console.log(this.$refs.ruleForm.getFormData())
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
      console.log(this.$refs.form.submit())
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
