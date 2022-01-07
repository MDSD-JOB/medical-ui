<template>
  <div class="demo-tree-select">
    <med-tree-select
      v-model="value"
      show-search
      style="width: 100%"
      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
      placeholder="Please select"
      allow-clear
      tree-default-expand-all
    >
      <med-tree-select-node key="0-1" value="parent 1" title="parent 1">
        <med-tree-select-node key="0-1-1" value="parent 1-0" title="parent 1-0">
          <med-tree-select-node
            key="random"
            :selectable="false"
            value="leaf1"
            title="my leaf"
          />
          <med-tree-select-node key="random1" value="leaf2" title="your leaf" />
        </med-tree-select-node>
        <med-tree-select-node
          key="random2"
          value="parent 1-1"
          title="parent 1-1"
        >
          <med-tree-select-node key="random3" value="sss">
            <b slot="title" style="color: #08c">sss</b>
          </med-tree-select-node>
        </med-tree-select-node>
      </med-tree-select-node>
    </med-tree-select>
  </div>
</template>
<script>
import { MedTreeSelect, MedTreeSelectNode } from './../components'
export default {
  components: {
    MedTreeSelect,
    MedTreeSelectNode
  },
  data() {
    return {
      treeExpandedKeys: [],
      value: undefined
    }
  }
}
</script>
