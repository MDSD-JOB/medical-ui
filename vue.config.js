module.exports = {
  css: {
    loaderOptions: {
      less: {
        // modifyVars: {
        //   'primary-color': '#41B883',
        //   'link-color': '#41B883',
        //   'border-radius-base': '2px'
        // },
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.jsx', '.less', '.css']
    }
  },
  devServer: {
    port: 8088
  }
}
