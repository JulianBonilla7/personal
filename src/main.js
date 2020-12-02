import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

import "@/shared/config/fa.js";
import VueTippy, { TippyComponent } from "vue-tippy";
import Vue2TouchEvents from "vue2-touch-events";

Vue.use(Vue2TouchEvents, {
  disableClick: true
});
Vue.use(VueTippy);

Vue.component("tippy", TippyComponent);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
