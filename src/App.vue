<template>
  <div id="app">
    <med-card title="123">
      <!-- <template slot="actions" class="ant-card-actions">
        <a-icon key="setting" type="setting" />
        <a-icon key="edit" type="edit" />
        <a-icon key="ellipsis" type="ellipsis" />
      </template> -->
      <div>123</div>
    </med-card>
    <med-pin
      layout="top"
      title="血压"
      unit="oc"
      num="1"
      :hoverable="true"
      bordered
      titleBg="yellow"
      checked
    >
    </med-pin>
  </div>
</template>

<script>
import MedCard from './components/MedCard'
import MedPin from './components/MedPin'

export default {
  name: 'App',
  components: {
    MedCard,
    MedPin
  },
  data() {
    return {
      tabList: [
        {
          key: 'tab1',
          tab: 'tab1'
        },
        {
          key: 'tab2',
          tab: 'tab2'
        }
      ]
    }
  }
}
</script>
