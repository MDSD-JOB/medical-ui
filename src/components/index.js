import ProTable from "./ProTable/index.js";
const components = {
  ProTable
};

const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.values(components).map(component => {
    Vue.component(component.name, component);
  });
};

/** 支持使用标签方式引入 */
if (typeof window != "undefined" && window.Vue) {
  install(window.Vue);
}

export default install;
export { ProTable };
