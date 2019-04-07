import Vue from "vue";
import App from "./App";
import router from "./router";

require("./assets/sass/main.scss");

import SlidingDoors from "./components/SlidingDoors/SlidingDoors";
Vue.component("SlidingDoors", SlidingDoors);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
