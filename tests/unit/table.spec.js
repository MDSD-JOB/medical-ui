import MedTable from '@/components/MedTable'
import { mount } from '@vue/test-utils'

describe('MedTable.vue', () => {
  it('renders props.rowKey when passed', () => {
    const key = 'id'
    const wrapper = mount(MedTable, {
      propsData: { rowKey: key }
    })
    expect(wrapper.props().rowKey).toBe(key)
  })
})
