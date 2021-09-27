export const columns = [
  {
    title: '标题',
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: {
      filterDropdown: 'filterDropdown',
      filterIcon: 'filterIcon'
    }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    expandIcon: 'search',
    filters: [
      {
        text: 'London',
        value: 'London'
      },
      {
        text: 'New York',
        value: 'New York'
      }
    ]
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' }
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]
export const list = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
]

export const dataSource = [
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
  {
    labelText: '数字输入框',
    type: 'number',
    required: true,
    fieldName: 'formFieldNumber',
    placeholder: '这只是一个数字的文本输入框',
    validator: (rule, value, cb) => {
      console.log(value)
      if (value && value < 5) {
        cb('不能以1开头')
      }
      cb()
    }
  },
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
  }
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
]
