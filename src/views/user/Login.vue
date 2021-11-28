<template>
  <div>
    <input type="text" v-model="username" placeholder="请输入用户名">
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { LOGIN } from '@/store/const'
export default {
  name: 'Login',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    ...mapActions([LOGIN]),
    async handleLogin () {
      try {
        if (!this.username) return
        await this[LOGIN]({ username: this.username })
        this.$router.push('/profile')
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>
