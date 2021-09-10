module.exports = {
  // presets: ["@vue/cli-plugin-babel/preset"],
  presets: ["@vue/babel-preset-jsx"],
  plugins: [
    // "@vue/babel-plugin-transform-vue-jsx",
    "@babel/plugin-transform-object-assign",
    "@babel/plugin-proposal-optional-chaining",
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false
      }
    ]
  ]
};
