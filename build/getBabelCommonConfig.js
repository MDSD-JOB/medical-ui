"use strict";

module.exports = function(modules) {
  const plugins = [
    require.resolve("@babel/plugin-proposal-optional-chaining"),
    require.resolve("@babel/plugin-transform-object-assign"),
    require.resolve("@vue/babel-plugin-transform-vue-jsx")
  ];
  plugins.push([
    require.resolve("@babel/plugin-transform-runtime"),
    {
      corejs: false,
      helpers: true,
      regenerator: true,
      useESModules: false
    }
    // The @babel/runtime module now skips polyfilling by default
    // {
    //   polyfill: false
    // }
  ]);
  return {
    presets: [
      [
        require.resolve("@babel/preset-env"),
        {
          modules,
          targets: {
            browsers: [
              "last 2 versions",
              "Firefox ESR",
              "> 1%",
              "ie >= 9",
              "iOS >= 8",
              "Android >= 4"
            ]
          }
        }
      ]
    ],
    plugins
    // env: {
    //   test: {
    //     plugins: [require.resolve("babel-plugin-istanbul")]
    //   }
    // }
  };
};
