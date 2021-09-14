// import MedTable from "@/components/MedTable";
import HelloWorld from '@/components/HelloWorld'
import { mount } from '@vue/test-utils'

describe('HelloWorld.vue', () => {
  it('test', () => {
    const msg = 'test'

    const wrapper = mount(HelloWorld, {
      propsData: {
        msg
      }
    })

    expect(wrapper.props().msg).toEqual(msg)
  })
})

// describe("MedTable.vue", () => {
//   it("renders props.rowKey when passed", () => {
//     const key = "id";
//     const wrapper = shallowMount(MedTable, {
//       propsData: { rowKey: key }
//     });
//     expect(wrapper.props().key).toBe(key);
//   });
// });
