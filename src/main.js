import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import ODS from '@onesait/onesait-ds' // eslint-disable-line
import i18n from './lang/i18n.js' // eslint-disable-line
import { closest } from './utils/ie' // eslint-disable-line
import { truncate, formatDate } from './utils/filters' // eslint-disable-line 

import 'reset-css/reset.css'
import '@onesait/onesait-ds/lib/theme-onesait/index.css'
import '@/assets/scss/main.scss'
import router from './router'
import store from './store/store.js'

Vue.config.productionTip = false

closest()

Vue.filter('truncate', truncate)
Vue.filter('formatDate', formatDate)

Vue.use(ODS)

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
