import client from 'webpack-theme-color-replacer/client'
import generate from '@ant-design/colors/lib/generate'

export default {
  primaryColor: '#0056a4',
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
    var lastColor = this.lastColor || this.primaryColor
    var options = {
      oldColors: this.getAntdSerials(lastColor),
      newColors: this.getAntdSerials(newColor)
    }
    var promise = client.changer.changeColor(options)
    this.lastColor = lastColor
    return promise
  }
}
