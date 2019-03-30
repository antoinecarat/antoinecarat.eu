import Vue from 'vue'
import App from './App'
import router from './router'

require('./assets/sass/main.scss')

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
