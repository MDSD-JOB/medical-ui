<template>
  <div class="demo-checkbox">
    <med-checkbox>
      Checkbox
    </med-checkbox>
    <div :style="{ borderBottom: '1px solid #E9E9E9' }">
      <med-checkbox
        :indeterminate="indeterminate"
        :checked="checkAll"
        @change="onCheckAllChange"
      >
        Check all
      </med-checkbox>
    </div>
    <br />
    <med-checkbox-group
      v-model="checkedList"
      :options="plainOptions"
      @change="onChange"
    />
  </div>
</template>
<script>
import { MedCheckbox, MedCheckboxGroup } from './../components'
const plainOptions = ['Apple', 'Pear', 'Orange']
const defaultCheckedList = ['Apple', 'Orange']
export default {
  components: {
    MedCheckbox,
    MedCheckboxGroup
  },
  data() {
    return {
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
      plainOptions
    }
  },
  methods: {
    onChange(checkedList) {
      this.indeterminate =
        !!checkedList.length && checkedList.length < plainOptions.length
      this.checkAll = checkedList.length === plainOptions.length
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked
      })
    }
  }
}
</script>
