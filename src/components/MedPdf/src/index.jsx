import './index.less'
import pdf from 'vue-pdf'
export default {
  name: 'MedPdf',
  components: {
    pdf
  },
  props: {
    src: {
      type: String,
      required: true
    }
  },
  methods: {},
  render() {
    const { src } = this
    return (
      <div class="med-pdf-wrapper">
        <pdf src={src}></pdf>
      </div>
    )
  }
}
