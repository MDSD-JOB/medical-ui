<template>
  <div class="DemoSTable">
    <MedButton @click="clear">清空</MedButton>
    <med-s-table
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
      showBatch
      :alert="alertOpt"
      @expand="expand"
      @batchOpt="batchOpt"
      @infinteLoad="infinteLoad"
      @rowLock="rowLock"
      infinte
      :infiniteLoadAll="false"
      :loading="loading"
    >
      <!-- <template #msgItem>sss</template> -->
      <template #alertItem>123221212</template>
      <a slot="name" slot-scope="text"> {{ text }} 123555 </a>

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
    </med-s-table>
  </div>
</template>

<script>
import { columns, list } from '../data'
import { MedSTable, MedButton } from '../components'
export default {
  components: {
    MedSTable,
    MedButton
  },
  data() {
    return {
      alertOpt: {
        clear: true,
        delete: true,
        export: true,
        save: true,
        invalid: () => {}
      },
      loading: false,
      columns,
      queryParam: {},

      loadData: () => {
        // const requestParameters = Object.assign({}, parameter, this.queryParam)
        // console.log('请求参数：', requestParameters)
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
      console.log('页数改变')
    },
    onSizeChange() {
      console.log('页码改变')
    },
    batchOpt(type, arr) {
      console.log('批量操作', type, arr)
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
      console.log('选中的项： ', selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys
    },
    clear() {
      // this.$refs.tables.clear()
      this.$refs.tables.clearSelected()
    },
    infinteLoad() {
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
