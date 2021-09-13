module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  // https://jestjs.io/docs/en/configuration#testenvironment-string
  // 测试环境默认为 jsdom
  // testEnvironment: "node",
  watchPathIgnorePatterns: ["/node_modules/", "/dist/"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"]
};
