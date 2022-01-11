import client from 'webpack-theme-color-replacer/client'
import generate from '@ant-design/colors/lib/generate'
// import less from 'less'

export default {
  getAntdSerials(color) {
    if (!color) return
    const lightens = new Array(9).fill().map((t, i) => {
      return client.varyColor.lighten(color, i / 10)
    })
    const colorPalettes = generate(color)
    const rgb = client.varyColor.toNum3(color.replace('#', '')).join(',')
    return lightens.concat(colorPalettes).concat(rgb)
  },
  changeColor(newColor) {
    var options = {
      newColors: this.getAntdSerials(newColor), // new colors array, one-to-one corresponde with `matchColors`
      changeUrl(cssUrl) {
        return `/${cssUrl}` // while router is not `hash` mode, it needs absolute path
      }
    }

    // if (less) {
    //   less.options.javascriptEnabled = true
    //   window.less &&
    //     window.less
    //       .modifyVars({
    //         '@primary-color': newColor
    //       })
    //       .then(() => {
    //         console.log(111, window.less)
    //       })
    // }

    return client.changer.changeColor(options, Promise)
  }
}
