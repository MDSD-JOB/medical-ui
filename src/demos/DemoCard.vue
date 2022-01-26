<template>
  <div class="DemoCard">
    <med-s-card width="500px" title="123">
      <div>123</div>
      <template #title>
        1234
        <a-switch />
      </template>
      <template #extra>extra</template>
      <template #actions>
        <button>底部插槽</button>
      </template>
      <med-s-sticker title="嵌套在card" num="嵌套在card"></med-s-sticker>
    </med-s-card>

    <br />

    <med-s-card
      tabStyle
      :tabList="[
        { tab: 'tab1', key: 'tab1' },
        { tab: 'tab2', key: 'tab2' }
      ]"
      :activeTabKey="activeTabKey"
      @tabChange="change"
    >
      <med-s-card title="32312"></med-s-card>
      <div @click="changeTab">changeTab</div>
      <div>tab卡片</div>
      <template #extra>adasdad</template>
    </med-s-card>

    <br />

    <med-s-card width="300px">
      简介卡片
      <template #extra><div @click="changeTab">changeTab</div></template>
    </med-s-card>
  </div>
</template>

<script>
import { MedSCard, MedSSticker } from './../components'

export default {
  components: {
    MedSCard,
    MedSSticker
  },
  data() {
    return {
      activeTabKey: 'tab2'
    }
  },
  methods: {
    change(key) {
      this.activeTabKey = key
      console.log(222222222222222, key)
    },
    changeTab() {
      this.activeTabKey = 'tab1'
    }
  }
}
</script>
