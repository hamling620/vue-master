<template>
  <div class="grandson1">
    <button :class="btnClass" @click="handleClick">切换主题</button>
  </div>
</template>

<script>
export default {
  name: 'Grandson1',
  inject: ['theme'],
  computed: {
    btnClass () {
      return this.theme.state === 'light' ? ['btn', 'btn-light'] : ['btn', 'btn-dark']
    }
  },
  methods: {
    handleClick () {
      this.theme.toggleTheme()
    }
  }
}
</script>

<style lang="scss" scoped>
.grandson1 {
  .btn {
    width: 120px;
    height: 36px;
    outline: none;
    cursor: pointer;
    &-light {
      background-color: #fff;
      color: #000;
    }
    &-dark {
      background-color: #000;
      color: #fff;
    }
  }
}
</style>