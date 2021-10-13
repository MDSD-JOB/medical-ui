<template>
  <div class="DemoTransfer">
    <med-transfer
      show-clear
      show-search
      rowKey="id"
      tableRowKey="id"
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
      return [
        {
          id: '2',
          patientId: '201203050001',
          visitId: '222222',
          hisNo: '1244444',
          name: 'test',
          dateOfBirth: '2021-10-12 15:48:59',
          sex: 'M',
          idNo: '320666xxxxxxxxxxxx',
          nation: '汉',
          marriage: '已婚',
          education: '本科',
          patJob: 'IT',
          citizenCard: '320666666',
          mrNo: '201200000',
          mailAddress: '苏州',
          phoneNumberHome: '13333333333',
          phoneNumberBusiness: '13333333333',
          nextOfKin: '吴七',
          relationship: '同事',
          nextOfKinPhone: '12133333333',
          patientType: '01',
          registTime: '2021-10-01 15:55:03',
          deptCode: '01',
          deptName: '急诊部门',
          doctorId: '3333',
          doctorName: '教授',
          isUsed: '1',
          registerType: '医保'
        },
        {
          id: '1',
          patientId: '201203050002',
          visitId: '222222',
          hisNo: '1244445',
          name: 'test',
          dateOfBirth: '2021-10-14 15:48:59',
          sex: 'M',
          idNo: '320666xxxxxxxxxxxx',
          nation: '汉',
          marriage: '已婚',
          education: '本科',
          patJob: 'IT',
          citizenCard: '320666666',
          mrNo: '201200000',
          mailAddress: '苏州',
          phoneNumberHome: '13333333333',
          phoneNumberBusiness: '13333333333',
          nextOfKin: '吴七',
          relationship: '同事',
          nextOfKinPhone: '12133333333',
          patientType: '01',
          registTime: '2021-10-06 15:55:03',
          deptCode: '01',
          deptName: '急诊部门',
          doctorId: '3333',
          doctorName: '教授',
          isUsed: '1',
          registerType: '医保'
        }
      ]
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
      return [
        {
          id: 'd8ab062d3ecc970293d97f414615b293',
          regId: '202110120325',
          patientId: '201203050001',
          registerNo: 'd8ab062d3ecc970293d97f414615b293',
          createTime: '2021-10-13T08:06:31.000+00:00'
        },
        {
          id: '225f4f5ba10b253c073d9d2cf883bdf1',
          regId: '202110120325',
          patientId: '201203050002',
          registerNo: '225f4f5ba10b253c073d9d2cf883bdf1',
          createTime: '2021-10-13T08:13:31.000+00:00'
        }
      ]
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
