// webpack.config.js
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");
const componentsEntry = require("./componentsEntry");

module.exports = {
  mode: "development",
  entry: componentsEntry,
  output: {
    path: path.join(process.cwd(), "lib/"),
    // publicPath: "/dist/",
    filename: "[name]/index.js",
    library: "medical-ui", // 用 script 引入时挂载的变量
    libraryTarget: "umd", // 通用模块定义
    // When using libraryTarget: "umd", setting output.
    // umdNamedDefine to true will name the AMD module of the UMD build.
    // Otherwise an anonymous define is used.
    umdNamedDefine: true
  },
  externals: {
    // 避免将 vue 打包进库, 并设置四种导入方式的相应别名
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue"
    }
  },
  resolve: {
    // 自动补全的扩展名
    extensions: [".js", ".vue", ".json", ".jsx", ".less"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },

      {
        test: /\.less$/,
        use: [
          {
            loader: "vue-style-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
              javascriptEnabled: true
            }
          }
        ]
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: "url?limit=8192"
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
