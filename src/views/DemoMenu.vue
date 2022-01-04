<template>
  <div class="demo-menu">
    <med-menu
      style="width: 256px"
      :default-selected-keys="['1']"
      :open-keys.sync="openKeys"
      mode="inline"
      @click="handleClick"
    >
      <med-sub-menu key="sub1" @titleClick="titleClick">
        <span slot="title"
          ><a-icon type="mail" /><span>Navigation One</span></span
        >
        <med-menu-item-group key="g1">
          <template slot="title">
            <a-icon type="qq" /><span>Item 1</span>
          </template>
          <med-menu-item key="1">
            Option 1
          </med-menu-item>
          <med-menu-item key="2">
            Option 2
          </med-menu-item>
        </med-menu-item-group>
        <med-menu-item-group key="g2" title="Item 2">
          <med-menu-item key="3">
            Option 3
          </med-menu-item>
          <med-menu-item key="4">
            Option 4
          </med-menu-item>
        </med-menu-item-group>
      </med-sub-menu>
      <med-sub-menu key="sub2" @titleClick="titleClick">
        <span slot="title"
          ><a-icon type="appstore" /><span>Navigation Two</span></span
        >
        <med-menu-item key="5">
          Option 5
        </med-menu-item>
        <med-menu-item key="6">
          Option 6
        </med-menu-item>
        <med-sub-menu key="sub3" title="Submenu">
          <med-menu-item key="7">
            Option 7
          </med-menu-item>
          <med-menu-item key="8">
            Option 8
          </med-menu-item>
        </med-sub-menu>
      </med-sub-menu>
      <med-sub-menu key="sub4">
        <span slot="title"
          ><a-icon type="setting" /><span>Navigation Three</span></span
        >
        <med-menu-item key="9">
          Option 9
        </med-menu-item>
        <med-menu-item key="10">
          Option 10
        </med-menu-item>
        <med-menu-item key="11">
          Option 11
        </med-menu-item>
        <med-menu-item key="12">
          Option 12
        </med-menu-item>
      </med-sub-menu>
    </med-menu>
  </div>
</template>
<script>
import { MedMenu, MedMenuItem, MedSubMenu } from './../components'
export default {
  components: {
    MedMenu,
    MedMenuItem,
    MedSubMenu
  },
  data() {
    return {
      current: ['mail'],
      openKeys: ['sub1']
    }
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val)
    }
  },
  methods: {
    handleClick(e) {
      console.log('click', e)
    },
    titleClick(e) {
      console.log('titleClick', e)
    }
  }
}
</script>
