<template>
  <div class="demo-mentions">
    <med-mentions v-model="value" @change="onChange" @select="onSelect">
      <med-mentions-option value="afc163">
        afc163
      </med-mentions-option>
      <med-mentions-option value="zombieJ">
        zombieJ
      </med-mentions-option>
      <med-mentions-option value="yesmeck">
        yesmeck
      </med-mentions-option>
    </med-mentions>
  </div>
</template>
<script>
import { MedMentions, MedMentionsOption } from './../components'
export default {
  components: {
    MedMentions,
    MedMentionsOption
  },
  data() {
    return {
      value: '@afc163'
    }
  },
  methods: {
    onSelect(option) {
      console.log('select', option)
    },
    onChange(value) {
      console.log('Change:', value)
    }
  }
}
</script>
