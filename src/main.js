// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import head from './components/head';
import axios from 'axios';
import Hello from './components/Hello';
import food from './components/food/food';
import good from './components/food/good';
import cart from './components/table/cart';
import seller from './components/table/seller';
import user from './components/user/user';
import echarts from './components/echarts/echarts';
import opinion from './components/echarts/opinion';
import ElementUI from 'element-ui'
import Vuex from 'vuex'

import './common/stylus/index.styl';
import 'element-ui/lib/theme-default/index.css'
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.config.debug = true;

Vue.prototype.$ajax = axios

const routes = [
  { 
    path: '/', 
    redirect: '/head',
    name: '',
    hidden: true
  },
  { 
    path: '/head',
    component: head,
    name: '',
    hidden: true
  },
  { 
    path: '/Hello',
    component: Hello,
    name: '',
    hidden: true
  },
  {
    path: '/',
    component: Hello,
    name: '用户管理',
    iconCls: 'el-icon-message',//图标样式class
    children: [
        { path: '/food', component: food, name: '用户列表' },
        { path: '/good', component: good, name: '数据' }
    ]
  },
  {
    path: '/',
    component: Hello,
    name: '订单中心',
    iconCls: 'el-icon-message',//图标样式class
    children: [
        { path: '/cart', component: cart, name: '购物车' },
         { path: '/seller', component: seller, name: 'vuex' },
    ]
  }, 
  {
      path: '/',
      component: Hello,
      name: '订单统计',
      iconCls: 'fa fa-bar-chart',
      children: [
          { path: '/echarts',  name: '柱状图',component: echarts},
          { path: '/opinion',  name: '意见' ,component: opinion}
      ]
  }
];
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});