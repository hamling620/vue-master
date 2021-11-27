<template>
  <div class="parent">
    parent: {{ count }}
    <!-- <Son1 :value="count" @input="count = $event" /> -->
    <Son1 v-model="count" />
  </div>
</template>

<script>
import Son1 from './Son1'

// v-model = :value + @input 向子组件传递value prop和input事件

export default {
  name: 'Parent',
  components: {
    Son1
  },
  provide () {
    const { theme, toggleTheme } = this
    theme.toggleTheme = toggleTheme
    return {
      theme // 提示：provide和inject绑定并不是可响应的，这是刻意为之。然而，你传入了一个可监听的对象，那么其对象的property还是可相应的。
    }
  },
  data () {
    return {
      count: 100,
      theme: {
        state: 'light'
      }
    }
  },
  methods: {
    toggleTheme () {
      console.log(this.theme)
      this.theme.state = this.theme.state === 'light' ? 'dark' : 'light'
    }
  }
}
</script>
