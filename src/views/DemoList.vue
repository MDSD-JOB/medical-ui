<template>
  <div class="demo-list">
    <med-list item-layout="horizontal" :data-source="data">
      <med-list-item slot="renderItem" slot-scope="item">
        <med-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </med-list-item-meta>
      </med-list-item>
    </med-list>
  </div>
</template>
<script>
import { MedList, MedListItem, MedListItemMeta } from './../components'
const data = [
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 2'
  },
  {
    title: 'Ant Design Title 3'
  },
  {
    title: 'Ant Design Title 4'
  }
]
export default {
  components: {
    MedList,
    MedListItem,
    MedListItemMeta
  },
  data() {
    return {
      data
    }
  }
}
</script>
