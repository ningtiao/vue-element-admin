import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import 'fullcalendar/dist/fullcalendar.min.css'
import '@/styles/index.scss' // global css
import App from './App'
import router from './router'
import store from './store'
import '@/icons' // icon
import '@/permission' // permission control
import i18n from './lang'
import FullCalendar from 'vue-full-calendar'

Vue.use(FullCalendar)
Vue.use(ElementUI, { locale })
Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
