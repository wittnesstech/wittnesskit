import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import PouchDB from "pouchdb";
import axios from "axios";
import router from "./router";
import appInfo from "./appInfo";
// import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
// import "roboto-fontface/css/roboto/roboto-fontface.css";
// import "material-design-icons-iconfont/dist/material-design-icons.css";
// import routes from "./router";
// import Vue from "vue";
// import Vuetify from "vuetify";
// import Matter from "matter-js";
// https://www.npmjs.com/package/vue-swatches
// Import the styles too, globally
// import "vue-swatches/dist/vue-swatches.min.css";
// import FlagIcon from "vue-flag-icon";
// Vue.use(FlagIcon);

// import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader

// Vue.use(Vuetify, {
//   iconfont: "fa"
// });

// Vue.use(PouchDB);
const resCache = new PouchDB("resCache");
const settingsDB = new PouchDB("settingsDB");

Object.defineProperty(Vue.prototype, "$resCache", { value: resCache });
Object.defineProperty(Vue.prototype, "$settingsDB", { value: settingsDB });
// Object.defineProperty(Vue.prototype, "$Matter", { value: Matter });
Object.defineProperty(Vue.prototype, "$axios", { value: axios });

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
