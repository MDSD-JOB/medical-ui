<template>
  <div id="app">
    <med-form :dataSource="dataSource" searchFormFlag> </med-form>
    <med-button>1123</med-button>
    <med-card :tabList="[{ tab: 1, key: 1 }]" :defaultTabKey="1">
      <!-- <template slot="actions" class="ant-card-actions">
        <a-icon key="setting" type="setting" />
        <a-icon key="edit" type="edit" />
        <a-icon key="ellipsis" type="ellipsis" />
      </template> -->
      <div>123</div>
    </med-card>
    <med-pin
      layout="top"
      title="血压"
      unit="oc"
      num="1"
      :hoverable="true"
      bordered
      titleBg="yellow"
      checked
    >
    </med-pin>
    <med-radio
      buttonType
      initialValue="1"
      :optionList="[
        { label: '选项1', value: '0', disabled: true },
        { label: '选项2', value: '1' }
      ]"
    ></med-radio>
  </div>
</template>

<script>
import MedForm from './components/MedForm'
import MedButton from './components/MedButton'
import MedCard from './components/MedCard'
import MedPin from './components/MedPin'
import MedRadio from './components/MedRadio'

export default {
  name: 'App',
  components: {
    MedButton,
    MedForm,
    MedCard,
    MedPin,
    MedRadio
  },
  data() {
    return {
      dataSource: [
        {
          labelText: '姓名',
          type: 'text',
          placeholder: '请输入姓名',
          fieldName: 'name',
          required: true,
          wrongMsg: '请输入正确格式的姓名',
          // 校验规则，支持正则，函数等,必须callback
          validator: (rule, value, cb) => {
            if (value && value.startsWith(1)) {
              cb('不能以1开头')
            }
            cb()
          }
        },
        {
          labelText: '性别',
          type: 'radio',
          placeholder: '请选择性别',
          fieldName: 'gender',
          required: true,
          wrongMsg: '请选择性别',
          initialValue: '0',
          buttonType: true,
          optionList: [
            { label: '男', value: '0' },
            { label: '女', value: '1' },
            { label: '未知', value: '2' }
          ]
        },
        {
          labelText: '出生日期',
          type: 'datetime',
          placeholder: '请选择出生日期',
          fieldName: 'birthday',
          required: true,
          wrongMsg: '请选择出生日期'
        },
        {
          labelText: '分诊时间',
          type: 'datetime',
          placeholder: '请选择分诊时间',
          fieldName: 'regTime',
          required: true,
          wrongMsg: '请选择分诊时间'
        },
        {
          labelText: '联系电话',
          type: 'text',
          placeholder: '请输入联系电话',
          fieldName: 'phone',
          required: true,
          wrongMsg: '请输入正确格式的联系电话'
        }
      ],
      tabList: [
        {
          key: 'tab1',
          tab: 'tab1'
        },
        {
          key: 'tab2',
          tab: 'tab2'
        }
      ]
    }
  }
}
</script>
