<template>
  <div class="demo-radio">
    <med-radio>Radio</med-radio>
    <div>
      <med-radio-group default-value="a" button-style="solid">
        <med-radio-button value="a">
          Hangzhou
        </med-radio-button>
        <med-radio-button value="b">
          Shanghai
        </med-radio-button>
        <med-radio-button value="c">
          Beijing
        </med-radio-button>
        <med-radio-button value="d">
          Chengdu
        </med-radio-button>
      </med-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <med-radio-group default-value="c" button-style="solid">
        <med-radio-button value="a">
          Hangzhou
        </med-radio-button>
        <med-radio-button value="b" disabled>
          Shanghai
        </med-radio-button>
        <med-radio-button value="c">
          Beijing
        </med-radio-button>
        <med-radio-button value="d">
          Chengdu
        </med-radio-button>
      </med-radio-group>
    </div>
  </div>
</template>
<script>
import { MedRadio, MedRadioGroup, MedRadioButton } from './../components'
export default {
  components: {
    MedRadio,
    MedRadioGroup,
    MedRadioButton
  }
}
</script>
