<template>
  <div class="demo-layout" id="components-layout-demo-basic">
    <med-layout>
      <med-layout-header>Header</med-layout-header>
      <med-layout-content>Content</med-layout-content>
      <med-layout-footer>Footer</med-layout-footer>
    </med-layout>

    <med-layout>
      <med-layout-header>Header</med-layout-header>
      <med-layout>
        <med-layout-sider>Sider</med-layout-sider>
        <med-layout-content>Content</med-layout-content>
      </med-layout>
      <med-layout-footer>Footer</med-layout-footer>
    </med-layout>

    <med-layout>
      <med-layout-header>Header</med-layout-header>
      <med-layout>
        <med-layout-content>Content</med-layout-content>
        <med-layout-sider>Sider</med-layout-sider>
      </med-layout>
      <med-layout-footer>Footer</med-layout-footer>
    </med-layout>

    <med-layout>
      <med-layout-sider>Sider</med-layout-sider>
      <med-layout>
        <med-layout-header>Header</med-layout-header>
        <med-layout-content>Content</med-layout-content>
        <med-layout-footer>Footer</med-layout-footer>
      </med-layout>
    </med-layout>
  </div>
</template>
<script>
import {
  MedLayout,
  MedLayoutHeader,
  MedLayoutContent,
  MedLayoutSider,
  MedLayoutFooter
} from './../components'
export default {
  components: {
    MedLayout,
    MedLayoutHeader,
    MedLayoutContent,
    MedLayoutSider,
    MedLayoutFooter
  }
}
</script>

<style>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>
