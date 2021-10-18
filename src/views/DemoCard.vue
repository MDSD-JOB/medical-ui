<template>
  <div class="DemoCard">
    <med-card width="500px" :bordered="false">
      <div>123</div>
      <template #title>
        1234
        <a-switch />
      </template>
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
      activeTabKey="tab1"
    >
      <div>tab卡片</div>
      <template #extra>adasdad</template>
    </med-card>

    <br />

    <med-card width="300px">
      简介卡片
      <template #extra>adasdad</template>
    </med-card>
  </div>
</template>

<script>
import { MedCard, MedPin } from './../components'

export default {
  components: {
    MedCard,
    MedPin
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
