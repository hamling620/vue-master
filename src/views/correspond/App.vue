<template>
  <div id="app">
    <Parent />
  </div>
</template>

<script>
import Parent from '@/views/correspond/Parent'

export default {
  name: 'App',
  components: {
    Parent
  }
}
</script>

<style lang="scss">
#app {
  padding: 30px;
  font-size: 20px;
}
</style>
