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
    dataIndex: 'patientId',
    title: 'Name'
  },
  {
    dataIndex: 'name',
    title: 'Description'
  }
]
const rightColumns = [
  {
    dataIndex: 'patientId',
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
      return [
        {
          patientId: '201203050001',
          id: '2',
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
          patientId: '201203050004',
          id: '1',
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
      return [
        {
          patientId: '201203050001',
          id: 'd8ab062d3ecc970293d97f414615b293',
          regId: '202110120325',
          registerNo: 'd8ab062d3ecc970293d97f414615b293',
          createTime: '2021-10-13T08:06:31.000+00:00'
        },
        {
          patientId: '201203050002',
          id: '225f4f5ba10b253c073d9d2cf883bdf1',
          regId: '202110120325',
          registerNo: '225f4f5ba10b253c073d9d2cf883bdf1',
          createTime: '2021-10-13T08:13:31.000+00:00'
        }
      ]
    },
    getNewLeftData() {
      this.leftData = [
        {
          patientId: '2012030500011',
          id: '2',
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
          patientId: '2012030500044',
          id: '1',
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
    getNewRightData() {
      this.rightData = [
        {
          patientId: '2012030500011',
          id: 'd8ab062d3ecc970293d97f414615b293',
          regId: '202110120325',
          registerNo: 'd8ab062d3ecc970293d97f414615b293',
          createTime: '2021-10-13T08:06:31.000+00:00'
        },
        {
          patientId: '2012030500022',
          id: '225f4f5ba10b253c073d9d2cf883bdf1',
          regId: '202110120325',
          registerNo: '225f4f5ba10b253c073d9d2cf883bdf1',
          createTime: '2021-10-13T08:13:31.000+00:00'
        }
      ]
    },
    change(leftArr, rightArr) {
      console.log('selectedObjs', leftArr, rightArr)
    }
  }
}
</script>
