import ProTable from "@/components/ProTable";
import { mount } from "@vue/test-utils";

describe("ProTable.vue", () => {
  it("renders props.rowKey when passed", () => {
    const key = "id";
    const wrapper = mount(ProTable, {
      propsData: { rowKey: key }
    });
    expect(wrapper.props().rowKey).toBe(key);
  });
});
