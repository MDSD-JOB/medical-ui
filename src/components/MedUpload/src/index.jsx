import T from 'ant-design-vue/es/upload/Upload'
import './index.less'
export default {
  name: 'MedUpload',
  data() {
    return {}
  },
  props: {
    ...T.props
  },
  render() {
    return (
      <template>
        <div class="med-upload-wrapper"></div>
      </template>
    )
  }
}
