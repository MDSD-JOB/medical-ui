<template>
  <div class="DemoTable">
    <MedButton @click="clear">清空</MedButton>
    <med-table
      ref="tables"
      rowKey="key"
      questNow
      :columns="columns"
      :dataSource="loadData"
      :showPagination="false"
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
      @infinteLoad="infinteLoad"
      @rowLock="rowLock"
      infinte
      :infiniteLoadAll="false"
      :loading="loading"
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
  </div>
</template>

<script>
import { columns, list } from './../data'
import { MedTable, MedButton } from './../components'
export default {
  components: {
    MedTable,
    MedButton
  },
  data() {
    return {
      loading: false,
      columns,
      queryParam: {},

      loadData: parameter => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        console.log('请求参数：', requestParameters)
        return Promise.resolve({
          current: 1,
          size: 10,
          total: 13,
          records: list
        })
      },
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
      selectedRowKeys: []
    }
  },
  methods: {
    rowLock(record, index) {
      console.log(record, index)
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
    rowClassName(record, index) {
      let className = 'light-row'
      if (index % 2 === 1) className = 'dark-row'
      return className
    },

    // 表格
    expand(expanded, row, index) {
      console.log('expand', expanded, row, index, this.expandedRowKeys)
    },
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys
    },
    clear() {
      this.$refs.tables.clear()
    },
    infinteLoad() {
      console.log('滚动加载')
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style lang="less">
.light-row {
  background-color: red;
}
.dark-row {
  background-color: yellow;
}
</style>
