# medical-ui

[![NPM Version](https://img.shields.io/npm/v/medical-ui.svg)](https://www.npmjs.com/package/medical-ui)

## 适用性说明

本组件库没有用 webpack 进行打包, 仅适用于具备相应构建能力的 vue 栈项目, 且需要导入了 `ant-design-vue` 作为前置依赖。

参照 ant-design-vue 文档，组件可使用 `med-` 前缀替代 `a-`,例如 `<med-button />` 替代 `<a-button />`。

## 安装

```bash
npm i ant-desin-vue // 前置依赖
npm i medical-ui // 本ui库

or

yarn add ant-desin-vue // 前置依赖
yarn add medical-ui // 本ui库
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
  },
  ...,
}
```

### \*Tip: 使用 MedTheme 修改主题色时（待优化）

```js
// 添加/配置 vue.config.js
const ThemeColorReplacer = require('webpack-theme-color-replacer') // 引入插件
function getAntdSerials(color) { // 定义方法
  var lightens = new Array(9).fill().map((t, i) => {
    return ThemeColorReplacer.varyColor.lighten(color, i / 10)
  })
  var darkens = new Array(6).fill().map((t, i) => {
    return ThemeColorReplacer.varyColor.darken(color, i / 10)
  })
  return lightens.concat(darkens)
}
module.exports = {
  ...,
  configureWebpack: {
    ...,
    plugins: [
      new ThemeColorReplacer({
        fileName: 'css/theme-colors.css',
        matchColors: getAntdSerials('#17509d')
      })
    ],
    ...,
  }
  ...,
}
```

## 组件概览

**二次开发组件**

1. MedSRadio: 单选框（完善中）
2. MedSCheckbox: 复选框（完善中）
3. MedSForm: 初步实现功能
4. MedSCard: 模块卡片
5. MedSSticker: 展示卡片

## 文档地址 (龟速补全中)

[文档](https://medical-ui.pages.dev)
