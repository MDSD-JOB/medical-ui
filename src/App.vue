<template>
  <div id="app">
    <med-button>button</med-button>
    ---------------------------------------------<br />
    <med-form
      :responsive="responsive"
      :dataSource="dataSource"
      :maxItem="1"
      @submit="submit"
      layout="inline"
    >
    </med-form>
    ---------------------------------------------<br />
    <med-form-model
      showBtn
      :form="form"
      :dataSource="dataSource"
      :responsive="responsive"
      @submit="submit"
    >
      <!-- <template #footer>
        <div>
          123
        </div>
      </template> -->
    </med-form-model>
    ---------------------------------------------<br />
    <med-radio
      buttonType
      :optionList="[
        { label: '选项1', value: '0', disabled: true },
        { label: '选项2', value: '1' }
      ]"
    ></med-radio>
    ---------------------------------------------<br />
    <med-card width="300px">
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
      defaultTabKey="tab1"
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
    <med-pin width="200px" layout="bottom" title="bottom">
      <div>
        asasddd adas
      </div>
      <template #extra>2急</template>
    </med-pin>
    <med-pin width="200px" layout="left" title="left">
      <div>
        asasddd adas
      </div>
    </med-pin>
    <med-pin
      layout="top"
      title="血压"
      unit="oc"
      num="1"
      :hoverable="true"
      titleBg="yellow"
      bordered
      checked
    >
    </med-pin>
  </div>
</template>

<script>
import MedForm from './components/MedForm'
import MedFormModel from './components/MedFormModel'
import MedButton from './components/MedButton'
import MedCard from './components/MedCard'
import MedPin from './components/MedPin'
import MedRadio from './components/MedRadio'

export default {
  name: 'App',
  components: {
    MedForm,
    MedFormModel,
    MedButton,
    MedCard,
    MedPin,
    MedRadio
  },
  data() {
    return {
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
      dataSource: [
        {
          labelText: '姓名',
          type: 'text',
          placeholder: '请输入姓名',
          fieldName: 'name',
          required: true,
          wrongMsg: '请输入正确格式的姓名',
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
        // {
        //   labelText: '输入框',
        //   type: 'textarea',
        //   placeholder: '文本输入区域',
        //   fieldName: 'formFieldTextArea',
        //   required: true,
        //   wrongMsg: '请输入文本',
        //   autoSize: {
        //     minRows: 1
        //   }
        // },
        // {
        //   labelText: '数字输入框',
        //   type: 'number',
        //   fieldName: 'formFieldNumber',
        //   placeholder: '这只是一个数字的文本输入框'
        // },
        {
          labelText: '单选框',
          type: 'radio',
          fieldName: 'formFieldRadio',
          required: true,
          initialValue: '1',
          buttonType: true,
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
        }
        // {
        //   labelText: '多选框',
        //   type: 'checkbox',
        //   fieldName: 'formFieldCheckbox',
        //   initialValue: ['0'],
        //   optionList: [
        //     {
        //       label: '选项1',
        //       value: '0',
        //       disabled: true
        //     },
        //     {
        //       label: '选项2',
        //       value: '1'
        //     }
        //   ]
        // },
        // {
        //   labelText: '日期选择',
        //   type: 'datetime',
        //   fieldName: 'formField4',
        //   placeholder: '选择日期'
        // },
        // {
        //   labelText: '日期范围',
        //   type: 'datetimeRange',
        //   fieldName: 'formField5',
        //   placeholder: ['开始日期', '选择日期']
        // },
        // {
        //   labelText: '下拉框',
        //   type: 'select',
        //   fieldName: 'formField7',
        //   placeholder: '下拉选择你要的',
        //   optionList: [
        //     {
        //       label: 'text1',
        //       value: '0'
        //     },
        //     {
        //       label: 'text2',
        //       value: '1'
        //     }
        //   ]
        // },
        // {
        //   labelText: '联动',
        //   type: 'cascader',
        //   fieldName: 'formField6',
        //   placeholder: '级联选择',
        //   optionList: [
        //     {
        //       value: 'zhejiang',
        //       label: 'Zhejiang',
        //       children: [
        //         {
        //           value: 'hangzhou',
        //           label: 'Hangzhou',
        //           children: [
        //             {
        //               value: 'xihu',
        //               label: 'West Lake'
        //             },
        //             {
        //               value: 'xiasha',
        //               label: 'Xia Sha',
        //               disabled: true
        //             }
        //           ]
        //         }
        //       ]
        //     },
        //     {
        //       value: 'jiangsu',
        //       label: 'Jiangsu',
        //       children: [
        //         {
        //           value: 'nanjing',
        //           label: 'Nanjing',
        //           children: [
        //             {
        //               value: 'zhonghuamen',
        //               label: 'Zhong Hua men'
        //             }
        //           ]
        //         }
        //       ]
        //     }
        //   ]
        // }
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
  },
  computed: {
    forms() {
      const obj = {}
      const formArr = this.dataSource.map(item => item.fieldName)
      formArr.map(item => (obj[item] = ''))
      return obj
    }
  },
  methods: {
    submit(data) {
      console.log(1111111, data)
    }
  }
}
</script>
