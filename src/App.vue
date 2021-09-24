<template>
  <div id="app">
    <med-form FieldFormFlag :dataSource="dataSource" searchFormFlag>
      <template slot="footer">
        <div style="text-align:center;">123sfwefew</div>
      </template>
    </med-form>
    <med-button>1123</med-button>
    <med-card :tabList="[{ tab: 1, key: 1 }]" defaultTabKey="tab1">
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
          labelText: '输入框',
          type: 'text',
          placeholder: '文本输入区域',
          fieldName: 'formFieldText',
          required: true,
          wrongMsg: '请输入文本'
        },
        {
          labelText: '输入框',
          type: 'textarea',
          placeholder: '文本输入区域',
          fieldName: 'formFieldTextArea',
          required: true,
          wrongMsg: '请输入文本',
          autoSize: {
            minRows: 1
          }
        },
        {
          labelText: '数字输入框',
          type: 'number',
          fieldName: 'formFieldNumber',
          placeholder: '这只是一个数字的文本输入框'
        },
        {
          labelText: '单选框',
          type: 'radio',
          fieldName: 'formFieldRadio',
          required: true,
          initialValue: '1',
          buttonType: true,
          buttonStyle: 'solid',
          optionList: [
            {
              label: 'radio选项1',
              value: '0',
              disabled: true
            },
            {
              label: 'radio选项2',
              value: '1'
            }
          ]
        },
        {
          labelText: '多选框',
          type: 'checkbox',
          fieldName: 'formFieldCheckbox',
          initialValue: ['0'],
          optionList: [
            {
              label: '选项1',
              value: '0',
              disabled: true
            },
            {
              label: '选项2',
              value: '1'
            }
          ]
        },
        {
          labelText: '日期选择',
          type: 'datetime',
          fieldName: 'formField4',
          placeholder: '选择日期'
        },
        {
          labelText: '日期范围',
          type: 'datetimeRange',
          fieldName: 'formField5',
          placeholder: ['开始日期', '选择日期']
        },
        {
          labelText: '下拉框',
          type: 'select',
          fieldName: 'formField7',
          placeholder: '下拉选择你要的',
          optionList: [
            {
              label: 'text1',
              value: '0'
            },
            {
              label: 'text2',
              value: '1'
            }
          ]
        },
        {
          labelText: '联动',
          type: 'cascader',
          fieldName: 'formField6',
          placeholder: '级联选择',
          optionList: [
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                  children: [
                    {
                      value: 'xihu',
                      label: 'West Lake'
                    },
                    {
                      value: 'xiasha',
                      label: 'Xia Sha',
                      disabled: true
                    }
                  ]
                }
              ]
            },
            {
              value: 'jiangsu',
              label: 'Jiangsu',
              children: [
                {
                  value: 'nanjing',
                  label: 'Nanjing',
                  children: [
                    {
                      value: 'zhonghuamen',
                      label: 'Zhong Hua men'
                    }
                  ]
                }
              ]
            }
          ]
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
