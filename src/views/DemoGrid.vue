<template>
  <div class="demo-grid">
    <med-row>
      <med-col :span="12">
        col-12
      </med-col>
      <med-col :span="12">
        col-12
      </med-col>
    </med-row>
    <med-row>
      <med-col :span="8">
        col-8
      </med-col>
      <med-col :span="8">
        col-8
      </med-col>
      <med-col :span="8">
        col-8
      </med-col>
    </med-row>
    <med-row>
      <med-col :span="6">
        col-6
      </med-col>
      <med-col :span="6">
        col-6
      </med-col>
      <med-col :span="6">
        col-6
      </med-col>
      <med-col :span="6">
        col-6
      </med-col>
    </med-row>
  </div>
</template>
<script>
import { MedRow, MedCol } from './../components'
export default {
  components: {
    MedRow,
    MedCol
  }
}
</script>
