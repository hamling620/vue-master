<template>
  <div class="son1">
    <div>son1: {{ value }}</div>
    <button @click="handleChange">改变</button>
    <div>theme: {{ theme.state }}</div>
    <GrandSon1 />
  </div>
</template>

<script>
import GrandSon1 from './GrandSon1'

export default {
  name: 'Son1',
  components: {
    GrandSon1
  },
  inject: ['theme'],
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleChange () {
      this.$emit('input', 200)
    }
  }
}

</script>

