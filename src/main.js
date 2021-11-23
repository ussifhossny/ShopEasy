import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import {store} from "./store/index";
import { BootstrapVue ,BootstrapVueIcons  } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "axios";
import VueAxios from "vue-axios";
import mixin from "./mixin.js";

Vue.config.productionTip = false;
Vue.mixin(mixin);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueAxios, axios);
Vue.use(require("vue-moment"));
// Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
