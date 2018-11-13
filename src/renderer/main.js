import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

if (!process.browser && !process.env.IS_WEB) Vue.use(require('vue-electron'));

/* eslint-disable no-new */
new Vue({
  components: {App},
  router,
  store,
  template: '<App />'
}).$mount('#app');
