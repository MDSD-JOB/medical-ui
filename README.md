# medical-ui

[![NPM Version](https://img.shields.io/npm/v/medical-ui.svg)](https://www.npmjs.com/package/medical-ui)

## 适用性说明

本组件库没有用 webpack 进行打包, 仅适用于具备相应构建能力的 vue 栈项目, 且需要导入了 `ant-design-vue` 作为前置依赖.

## 安装

```bash
npm i ant-desin-vue // 前置依赖
npm i medical-ui // 本ui库

or

yarn add ant-desin-vue
yarn add medical-ui
```

### 引入 Medical UI

```js
// main.js 导入全部组件
import MedicalUI from "medical-ui";
// 导入全部 css
import "medical-ui/lib/medical-ui.css";
Vue.use(MedicalUI)

--------------- --------------------------

// 组件内按需导入
import { MedButton } from "medical-ui";
// 如需进行样式变量覆盖则请相应 less 文件
import "medical-ui/lib/MedButton/style/index.less";
export default {
  ...,
  components: {
    MedButton
  }
}
```

## 组件概览

**二次开发组件**

1. MedButton: 按钮
2. MedSRadio: 单选框（完善中）
3. MedSCheckbox: 复选框（完善中）
4. MedSForm: 初步实现功能
5. MedSCard: 模块卡片
6. MedPin: 展示卡片

## 文档地址 (龟速补全中)

[文档](https://medical-ui.pages.dev)
