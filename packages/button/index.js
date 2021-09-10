import MedButton from "./src/index.vue";

MedButton.install = function(Vue) {
  Vue.component(MedButton.name, MedButton);
};
export default MedButton;
