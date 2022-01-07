<template>
  <div class="demo-form-model">
    <med-form-model
      :model="form"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <med-form-model-item label="Activity name">
        <a-input v-model="form.name" />
      </med-form-model-item>
      <med-form-model-item label="Activity zone">
        <a-select v-model="form.region" placeholder="please select your zone">
          <a-select-option value="shanghai">
            Zone one
          </a-select-option>
          <a-select-option value="beijing">
            Zone two
          </a-select-option>
        </a-select>
      </med-form-model-item>
      <med-form-model-item label="Activity time">
        <a-date-picker
          v-model="form.date1"
          show-time
          type="date"
          placeholder="Pick a date"
          style="width: 100%;"
        />
      </med-form-model-item>
      <med-form-model-item label="Instant delivery">
        <a-switch v-model="form.delivery" />
      </med-form-model-item>
      <med-form-model-item label="Activity type">
        <a-checkbox-group v-model="form.type">
          <a-checkbox value="1" name="type">
            Online
          </a-checkbox>
          <a-checkbox value="2" name="type">
            Promotion
          </a-checkbox>
          <a-checkbox value="3" name="type">
            Offline
          </a-checkbox>
        </a-checkbox-group>
      </med-form-model-item>
      <med-form-model-item label="Resources">
        <a-radio-group v-model="form.resource">
          <a-radio value="1">
            Sponsor
          </a-radio>
          <a-radio value="2">
            Venue
          </a-radio>
        </a-radio-group>
      </med-form-model-item>
      <med-form-model-item label="Activity form">
        <a-input v-model="form.desc" type="textarea" />
      </med-form-model-item>
      <med-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">
          Create
        </a-button>
        <a-button style="margin-left: 10px;">
          Cancel
        </a-button>
      </med-form-model-item>
    </med-form-model>
  </div>
</template>
<script>
import { MedFormModel, MedFormModelItem } from './../components'
export default {
  components: {
    MedFormModel,
    MedFormModelItem
  },
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!', this.form)
    }
  }
}
</script>
