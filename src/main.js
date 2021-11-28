import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '@/assets/scss/index.scss'

import { bus, dispatch, broadcast } from '@/lib'

Vue.use(router)

Vue.prototype.$bus = bus

Vue.prototype.$dispatch = dispatch
Vue.prototype.$broadcast = broadcast

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
