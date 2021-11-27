import Vue from 'vue'
import App from './App'
import '@/assets/scss/index.scss'

import { bus, dispatch, broadcast } from '@/lib'

Vue.prototype.$bus = bus

Vue.prototype.$dispatch = dispatch
Vue.prototype.$broadcast = broadcast

new Vue({
  render: h => h(App)
}).$mount('#app')
