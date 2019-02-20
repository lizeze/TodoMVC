// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import axios from './vue-axios';
import {Rate} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(axios);
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(Rate);
new Vue({

  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
