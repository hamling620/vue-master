<template>
  <div class="grandson2">
    <div>$attrs: {{ $attrs }}</div>
    <div v-bind="$attrs" v-on="$listeners" ref="divRef"></div>
  </div>
</template>

<script>
export default {
  name: 'Grandson2',
  inheritAttrs: false, // 根元素不继承非prop属性
  created () {
    console.log('$attrs', this.$attrs)
    console.log('$listeners', this.$listeners)
  },
  mounted () {
    // ref作用于元素上，获取真实DOM，需要在mounted中获取
    console.log(this.$refs.divRef)
  }
}
</script>
