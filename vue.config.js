// const ThemeColorReplacer = require('webpack-theme-color-replacer')
// function getAntdSerials(color) {
//   var lightens = new Array(9).fill().map((t, i) => {
//     return ThemeColorReplacer.varyColor.lighten(color, i / 10)
//   })
//   var darkens = new Array(6).fill().map((t, i) => {
//     return ThemeColorReplacer.varyColor.darken(color, i / 10)
//   })
//   return lightens.concat(darkens)
// }
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.jsx', '.less', '.css']
    }
    // plugins: [
    //   new ThemeColorReplacer({
    //     fileName: 'css/theme-colors.css',
    //     matchColors: getAntdSerials('#0056a4')
    //   })
    // ]
  },
  devServer: {
    port: 8088
  }
}
