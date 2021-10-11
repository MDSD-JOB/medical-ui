export const columns = [
  {
    // title: '标题',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
    // hideAble: true, // 是否可以隐藏
    // sorter: true,
    slots: { title: 'customTitle' }, // 表头插槽
    scopedSlots: {
      customRender: 'name', // 内容插槽
      filterDropdown: 'filterDropdown',
      filterIcon: 'searchIcon'
    }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
    hideAble: true, // 是否可以隐藏
    expandIcon: 'search'
    // filters: [
    //   {
    //     text: 'London',
    //     value: 'London'
    //   },
    //   {
    //     text: 'New York',
    //     value: 'New York'
    //   }
    // ]
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
    title: 'Tags1',
    key: 'tags1',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' }
  },
  {
    title: 'Tags2',
    key: 'tags2',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' }
  },
  {
    title: 'Tags3',
    key: 'tags3',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' }
  },
  {
    title: 'Tags4',
    key: 'tags4',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' }
  },
  {
    title: 'Tags5',
    key: 'tags5',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' }
  },
  {
    title: 'Action',
    key: 'action',
    fixed: 'right',
    scopedSlots: { customRender: 'action' }
  }
]
export const list = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Browns',
            age: 16,
            address: 'New York No. 3 Lake Park'
          }
        ]
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr1.',
                age: 25,
                address: 'London No. 3 Lake Park',
                children: [
                  {
                    key: 13111,
                    name: 'Jim Green jr11111111.',
                    age: 251,
                    address: 'London No. 3 Lake Park'
                  }
                ]
              },
              {
                key: 1312,
                name: 'Jimmy Green sr2.',
                age: 18,
                address: 'London No. 4 Lake Park'
              }
            ]
          }
        ]
      }
    ]
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
    buttonType: true,
    optionList: [
      {
        label: 'radio选项1',
        value: '0'
        // disabled: true
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
  // {
  //   labelText: '日期选择',
  //   type: 'datetime',
  //   fieldName: 'formField4',
  //   placeholder: '选择日期'
  // }
  {
    labelText: '日期范围',
    type: 'datetimeRange',
    showTime: true,
    fieldName: 'formField5',
    placeholder: ['开始日期', '选择日期']
  },
  {
    labelText: '下拉框',
    type: 'select',
    fieldName: 'formField7',
    placeholder: '下拉选择你要的',
    initialValue: '0',
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
  }
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
