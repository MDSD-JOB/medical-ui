<template>
  <div class="DemoTransfer">
    <med-transfer
      show-clear
      show-search
      rowKey="patientId"
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
    </med-transfer>
    <med-button @click="getNewLeftData">获取新数据</med-button>
    <med-button @click="getNewRightData">获取右边新数据</med-button>
  </div>
</template>

<script>
import { MedTransfer, MedButton } from './../components'

const leftColumns = [
  {
    dataIndex: 'id',
    title: 'id'
  },
  {
    dataIndex: 'patientId',
    title: 'patientId'
  }
]
const rightColumns = [
  {
    dataIndex: 'id',
    title: 'id'
  },
  {
    dataIndex: 'patientId',
    title: 'patientId'
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
      return [
        {
          patientId: '201203050001',
          id: 'd8ab062d3ecc970293d97f414615b293'
        },
        {
          patientId: '201203050004',
          id: '225f4f5ba10b253c073d9d2cf883bdf1'
        }
      ]
    },
    getRightData() {
      return [
        {
          patientId: '201203050001'
        },
        {
          patientId: '201203050002'
        }
      ]
    },
    getNewLeftData() {
      this.leftData = [
        {
          patientId: '2012030500011',
          id: 'd8ab062d3ecc970293d97f414615b293'
        },
        {
          patientId: '2012030500044',
          id: '225f4f5ba10b253c073d9d2cf883bdf1'
        }
      ]
    },
    getNewRightData() {
      this.rightData = [
        {
          patientId: '2012030500011'
        },
        {
          patientId: '2012030500022'
        }
      ]
    },
    change(leftArr, rightArr) {
      console.log('selectedObjs', leftArr, rightArr)
    }
  }
}
</script>
