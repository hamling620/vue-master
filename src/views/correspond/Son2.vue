<template>
  <div class="son2">
    <div>son1: {{ count }}</div>
    <button @click="handleChange">改变</button>
  </div>
</template>

<script>

export default {
  name: 'Son2',
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleChange () {
      this.$emit('update:count', 300)
    }
  }
}

</script>

