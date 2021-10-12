<template>
  <div class="DemoTransfer">
    <med-transfer
      childrenType="table"
      :dataSource="transferLeftData"
      :targetKeys="transferRightData"
      :filter-option="
        (inputValue, item) => item.title.indexOf(inputValue) !== -1
      "
      :leftColumns="leftColumns"
      :rightColumns="rightColumns"
      @change="change"
    >
    </med-transfer>
  </div>
</template>

<script>
import { MedTransfer } from './../components'

const transferLeftData = []
for (let i = 0; i < 20; i++) {
  transferLeftData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`
  })
}

const transferRightData = transferLeftData
  .filter(item => +item.key % 3 > 1)
  .map(item => item.key)

const leftTableColumns = [
  {
    dataIndex: 'title',
    title: 'Name'
  },
  {
    dataIndex: 'description',
    title: 'Description'
  }
]
const rightTableColumns = [
  {
    dataIndex: 'title',
    title: 'Name'
  }
]
export default {
  components: {
    MedTransfer
  },
  data() {
    return {
      transferLeftData: transferLeftData,
      transferRightData: transferRightData,
      leftColumns: leftTableColumns,
      rightColumns: rightTableColumns
    }
  },
  methods: {
    change(nextTargetKeys) {
      this.transferRightData = nextTargetKeys
    }
  }
}
</script>
