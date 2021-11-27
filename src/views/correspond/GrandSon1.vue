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
  mounted () {
    // Vue中创建组件是通过深度优先遍历，Son1的子组件Grandson1先于Son1挂载，Son1先于Son2挂载，因此Grandson1中mounted生命周期中emit事件时，Son2中mounted生命周期还未完成，因此是无法监听到的。
    // 可以使用$nextTick解决
    this.$nextTick(() => {
      this.$bus.$emit('SAY_HELLO', 'sayhello')
    })
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