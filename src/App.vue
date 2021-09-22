<template>
  <div id="app">
    <med-form searchFormFlag> </med-form>
    <med-button>1123</med-button>
    <med-card :tabList="[{ tab: 1, key: 1 }]" :defaultTabKey="1">
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
    <med-checkbox
      initialValue="1"
      :optionList="[
        { label: '选项1', value: '0', disabled: true },
        { label: '选项2', value: '1' }
      ]"
    ></med-checkbox>
  </div>
</template>

<script>
import MedForm from './components/MedForm'
import MedButton from './components/MedButton'
import MedCard from './components/MedCard'
import MedPin from './components/MedPin'
import MedCheckbox from './components/MedCheckbox'

export default {
  name: 'App',
  components: {
    MedButton,
    MedForm,
    MedCard,
    MedPin,
    MedCheckbox
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
