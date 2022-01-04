export const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        value: '0-0-1',
        key: '0-0-1',
        scopedSlots: {
          // custom title
          title: 'title'
        }
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
        key: '0-0-2'
      }
    ]
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1'
  }
]
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
    key: 'a',
    name: 'John Browna',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: 'b',
    name: 'John Brobwna',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: 'c',
    name: 'John cBrowna',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: 'd',
    name: 'Johnd Browna',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: 'e',
    name: 'Johne Browna',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: 'f',
    name: 'Johneg Browna',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: 'g',
    name: 'Johne gggBrowna',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: 'cn',
    name: 'Johne gggBrowna',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: 'i',
    name: 'Johne gggBrowna',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
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
    type: 'text',
    labelText: '姓名',
    placeholder: '请输入姓名',
    fieldName: 'name',
    hasFeedback: true,
    required: true,
    // disabled: true,
    initialValue: 1222,
    wrongMsg: '请输入正确格式的姓名',
    trigger: 'change',
    validator: (rule, value, cb) => {
      if (value && value.toString().startsWith(1)) {
        cb('不能以1开头')
      }
      cb()
    },
    change: () => {
      console.log('我是输入框事件')
    }
    // customRender: h => {
    //   return h('div', 123)
    // }
  },
  {
    labelText: '下拉框',
    type: 'select',
    mode: 'multiple',
    fieldName: 'formField7',
    placeholder: '下拉选择你要的',
    required: true,
    optionList: [
      {
        label: 'text1',
        value: '0'
      },
      {
        label: 'text2',
        value: '1'
      },
      {
        label: 'text3',
        value: '3'
      },
      {
        label: 'text4',
        value: '4'
      },
      {
        label: 'text5',
        value: '5'
      },
      {
        label: 'text6',
        value: '6'
      }
    ],
    change: () => {
      console.log(111)
    }
  },
  {
    type: 'treeSelect',
    labelText: '姓名ss',
    placeholder: '请输入姓名ss',
    fieldName: 'treeselect',
    wrongMsg: '请输入正确格式的姓名ss',
    optionList: treeData
    // responsive: { span: 8 }
  },
  {
    labelText: '输入框',
    type: 'text',
    disabled: true,
    // initialValue: 1,
    placeholder: '文本输入区域',
    fieldName: 'age',
    required: true,
    wrongMsg: '请输入文本',
    responsive: {
      xl: 8,
      lg: 12,
      md: 12,
      sm: 24,
      xs: 24
    },
    change: () => {
      console.log(111)
    }
  },
  {
    labelText: 'wew输入框',
    type: 'textarea',
    placeholder: '文本输入区域',
    fieldName: 'formFieldTextArea',
    required: true,
    wrongMsg: '请输入文本',
    autoSize: {
      minRows: 1
    },
    responsive: {
      xl: 8,
      lg: 12,
      md: 12,
      sm: 24,
      xs: 24
    }
  },
  {
    labelText: '数字输入框',
    type: 'number',
    required: true,
    fieldName: 'formFieldNumber',
    placeholder: '这只是一个数字的文本输入框',
    validator: (rule, value, cb) => {
      if (value && value < 5) {
        cb('不能小于5')
      }
      cb()
    },
    responsive: {
      xl: 12,
      lg: 12,
      md: 12,
      sm: 24,
      xs: 24
    }
  },
  {
    labelText: '单选框',
    type: 'radio',
    fieldName: 'formFieldRadio',
    required: true,
    buttonType: true,
    // initialValue: '1',
    // disabled: true,
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
    ],
    responsive: {
      xl: 12,
      lg: 12,
      md: 12,
      sm: 24,
      xs: 24
    },
    formLayout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } },
    change: e => {
      console.log(11111, e)
    },
    customRender: h => {
      // console.log(decorator)
      return h('a-input', {
        attrs: {
          placeholder: 'xxx',
          required: 'required'
        },
        on: {
          change: e => {
            console.log(11111, e)
          }
        },
        scopedSlots: {
          prefix: () => h('span', 12)
        }
      })
    }
  },
  {
    labelText: '多选框',
    type: 'checkbox',
    fieldName: 'formFieldCheckbox',
    required: true,
    // disabled: true,
    // initialValue: ['1'],
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
    ],
    change: e => {
      console.log(222222222, e)
    },
    formLayout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
  },
  {
    labelText: '日期选择1',
    type: 'datetime',
    fieldName: 'formField4',
    required: true,
    // valueFormat: 'YYYY-MM-DD HH:mm:ss',
    placeholder: '选择日期',
    datetimeTotimeStamp: true,
    change: () => {
      console.log('timeChange')
    }
  },
  {
    labelText: '日期范围',
    type: 'datetimeRange',
    showTime: true,
    fieldName: 'formField5',
    required: true,
    placeholder: ['开始日期', '选择日期'],
    change: () => {
      console.log('timeRangeChange')
    }
  },

  {
    labelText: '下拉框2',
    type: 'select',
    fieldName: 'formField100',
    placeholder: '下拉选择你要的',
    wrongMsg: '请输入正确的',
    required: true,
    optionList: [
      // {
      //   label: 'text2221',
      //   value: '0'
      // },
      // {
      //   label: 'text2222',
      //   value: '1'
      // }
    ]
  },
  {
    labelText: '开关',
    type: 'switch',
    fieldName: 'switchs',
    // defaultChecked: true,
    required: false,
    // disabled: true,
    change: () => {
      console.log('change')
    }
  },
  {
    labelText: '评分',
    type: 'rate',
    fieldName: 'rate'
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
