import MedSTable from '@/components/MedSTable'
import { mount } from '@vue/test-utils'

describe('MedSTable.vue', () => {
  it('renders props.rowKey when passed', () => {
    const key = 'id'
    const wrapper = mount(MedSTable, {
      propsData: { rowKey: key }
    })
    expect(wrapper.props().rowKey).toBe(key)
  })
})
