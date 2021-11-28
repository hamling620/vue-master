import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/user/Home.vue'
import store from '@/store'
import { VALIDATE } from '@/store/const'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/Login.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/user/Profile.vue'),
    meta: {
      needLogin: true
    }
  }
]

const router = new Router({
  // mode: 'history',
  routes
})

const WHITE_LIST = [
  '/'
]

router.beforeEach(async (to, from, next) => {
  if (WHITE_LIST.includes(to.path)) return next()
  const isLogin = await store.dispatch(VALIDATE)
  if (isLogin) {
    if (to.name === 'login') return next('/profile')
    next()
  } else {
    const needLogin = to.matched.some(item => item.meta.needLogin)
    if (needLogin) return next('/login')
    next()
  }
})

export default router
