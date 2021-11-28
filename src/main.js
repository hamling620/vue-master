import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element from '@/plugin/element'
import { bus, dispatch, broadcast } from '@/lib'

import '@/assets/scss/index.scss'
import '@/assets/scss/element.scss'

Vue.use(Element)

Vue.prototype.$bus = bus

Vue.prototype.$dispatch = dispatch
Vue.prototype.$broadcast = broadcast

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
