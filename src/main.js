import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.css'
import './assets/font/font.css'

import backgroundImg from '@/components/backgroundimg.vue'
Vue.component('backgroundImg', backgroundImg)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
