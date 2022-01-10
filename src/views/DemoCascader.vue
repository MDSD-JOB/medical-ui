<template>
  <div class="demo-cascader">
    <med-cascader :options="cascaderoptions" placeholder="Please select" />
  </div>
</template>
<script>
import { MedCascader } from './../components'
export default {
  components: {
    MedCascader
  },
  data() {
    return {
      cascaderoptions: [
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
                  label: 'Zhong Hua Men'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
