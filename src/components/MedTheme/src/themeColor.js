import client from 'webpack-theme-color-replacer/client'
import generate from '@ant-design/colors/lib/generate'

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
      newColors: this.getAntdSerials(newColor),
      changeUrl(cssUrl) {
        return `/${cssUrl}`
      }
    }
    return client.changer.changeColor(options, Promise)
  }
}
