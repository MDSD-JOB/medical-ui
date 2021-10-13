<template>
  <div class="DemoTransfer">
    <med-transfer
      show-clear
      show-search
      :filter-option="
        (inputValue, option) => option.title.indexOf(inputValue) !== -1
      "
      :titles="['左标题', '']"
      :operations="['推入', '推出']"
      :leftData="leftData"
      :rightData="rightData"
      :leftColumns="leftColumns"
      :rightColumns="rightColumns"
      @change="change"
    >
      <!-- <template #footer>123</template> -->
      <template #from></template>
    </med-transfer>
    <med-button @click="getNewLeftData">获取新数据</med-button>
    <med-button @click="getNewRightData">获取右边新数据</med-button>
  </div>
</template>

<script>
import { MedTransfer, MedButton } from './../components'

const leftColumns = [
  {
    dataIndex: 'title',
    title: 'Name'
  },
  {
    dataIndex: 'description',
    title: 'Description'
  }
]
const rightColumns = [
  {
    dataIndex: 'title',
    title: 'Name'
  }
]
export default {
  components: {
    MedTransfer,
    MedButton
  },
  data() {
    return {
      leftData: [],
      rightData: [],
      leftColumns,
      rightColumns,
      savedRightData: []
    }
  },
  created() {
    this.leftData = this.getLeftData()
    this.rightData = this.getRightData()
  },
  methods: {
    getLeftData() {
      const leftData = []
      for (let i = 0; i < 19; i++) {
        leftData.push({
          key: 'old' + i.toString(),
          title: `旧数据${i + 1}`,
          description: `description of 旧数据${i + 1}`
        })
      }
      return leftData
    },
    getRightData() {
      const rightData = []
      for (let i = 0; i < 19; i++) {
        rightData.push({
          key: 'right' + i.toString(),
          title: `右边数据${i + 1}`,
          description: `description of 右边数据${i + 1}`
        })
      }
      return rightData
    },
    getNewLeftData() {
      const leftData = []
      for (let i = 0; i < 19; i++) {
        leftData.push({
          key: 'new' + i.toString(),
          title: `新数据${i + 1}`,
          description: `新数据内容${i + 1}`
        })
      }
      this.leftData = leftData
    },
    getNewRightData() {
      const rightData = []
      for (let i = 0; i < 19; i++) {
        rightData.push({
          key: 'newRight' + i.toString(),
          title: `newRight${i + 1}`,
          description: `newRight${i + 1}`
        })
      }
      this.rightData = rightData
    },
    change(leftArr, rightArr) {
      console.log('selectedObjs', leftArr, rightArr)
    }
  }
}
</script>
