<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import { test } from '@/api'

export default {
  name: 'App'
  // async created () {
  //   const res = await test()
  //   console.log(res)
  // }
}
</script>

<style lang="scss">
#app {
  padding: 30px;
  font-size: 20px;
}
</style>
