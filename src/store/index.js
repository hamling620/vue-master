import Vue from 'vue'
import Vuex from 'vuex'
import { SET_USERNAME, LOGIN, VALIDATE } from './const'
import { login, validate } from '@/api'
import { setToken } from '@/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: ''
  },
  getters: {},
  mutations: {
    [SET_USERNAME] (state, value) {
      state.username = value
    }
  },
  actions: {
    async [LOGIN] ({ commit }, { username }) {
      const res = await login({ username })
      if (res?.code === 200) {
        if (res.data) {
          const { username, token } = res.data
          username && commit(SET_USERNAME, username)
          token && setToken(token)
        }
      } else {
        return Promise.reject(res?.message)
      }
    },
    async [VALIDATE] ({ commit }) {
      const res = await validate()
      if (res?.code === 401) return false
      if (res?.data) {
        const { username, token } = res.data
        username && commit(SET_USERNAME, username)
        token && setToken(token)
        return true
      }
      return false
    }
  }
})
