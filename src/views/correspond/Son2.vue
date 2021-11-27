<template>
  <div class="son2">
    <div>son2: {{ count }}</div>
    <button @click="handleChange">改变</button>
    <Grandson2 username="hamling" :age="30" @change="handleChange" />
  </div>
</template>

<script>
import Grandson2 from './Grandson2'

export default {
  name: 'Son2',
  components: {
    Grandson2
  },
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    this.$bus.$on('SAY_HELLO', value => {
      console.log(value)
    })
  },
  methods: {
    handleChange () {
      this.$emit('update:count', 300)
    }
  }
}

</script>

