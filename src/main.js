// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import axios from 'axios';
import ElementUI from 'element-ui';
import Vuex from 'vuex';
import routes from './router/index';
import store from './store/store';

import './common/stylus/index.styl';
import 'element-ui/lib/theme-default/index.css';
Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.config.debug = true;

Vue.prototype.$ajax = axios;


const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});