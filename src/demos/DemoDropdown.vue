<template>
  <div class="demo-dropdown">
    <med-dropdown>
      <a class="ant-dropdown-link" @click="e => e.preventDefault()">
        Hover me <a-icon type="down" />
      </a>
      <med-menu slot="overlay">
        <med-menu-item>
          <a href="javascript:;">1st menu item</a>
        </med-menu-item>
        <med-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </med-menu-item>
        <med-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </med-menu-item>
      </med-menu>
    </med-dropdown>
    <med-dropdown-button>
      <a class="ant-dropdown-link" @click="e => e.preventDefault()">
        Hover me <a-icon type="down" />
      </a>
      <med-menu slot="overlay">
        <med-menu-item>
          <a href="javascript:;">1st menu item</a>
        </med-menu-item>
        <med-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </med-menu-item>
        <med-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </med-menu-item>
      </med-menu>
    </med-dropdown-button>
    <med-dropdown :trigger="['contextmenu']">
      <div
        :style="{
          textAlign: 'center',
          background: '#f7f7f7',
          height: '200px',
          lineHeight: '200px',
          color: '#777'
        }"
      >
        Right Click on here
      </div>
      <med-menu slot="overlay">
        <med-menu-item key="1">
          1st menu item
        </med-menu-item>
        <med-menu-item key="2">
          2nd menu item
        </med-menu-item>
        <med-menu-item key="3">
          3rd menu item
        </med-menu-item>
      </med-menu>
    </med-dropdown>
  </div>
</template>
<script>
import {
  MedDropdown,
  MedDropdownButton,
  MedMenu,
  MedMenuItem
} from './../components'
export default {
  components: {
    MedMenu,
    MedMenuItem,
    MedDropdown,
    MedDropdownButton
  }
}
</script>
