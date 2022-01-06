<template>
  <div class="demo-collapse">
    <med-collapse v-model="activeKey">
      <med-collapse-panel key="1" header="This is panel header 1">
        <p>{{ text }}</p>
      </med-collapse-panel>
      <med-collapse-panel
        key="2"
        header="This is panel header 2"
        :disabled="false"
      >
        <p>{{ text }}</p>
      </med-collapse-panel>
      <med-collapse-panel key="3" header="This is panel header 3" disabled>
        <p>{{ text }}</p>
      </med-collapse-panel>
    </med-collapse>
  </div>
</template>
<script>
import { MedCollapse, MedCollapsePanel } from './../components'
export default {
  components: {
    MedCollapse,
    MedCollapsePanel
  },
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      activeKey: ['1']
    }
  },
  watch: {
    activeKey(key) {
      console.log(key)
    }
  }
}
</script>
