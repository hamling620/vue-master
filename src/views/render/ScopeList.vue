<template>
  <div>
    <div v-for="(item, index) in data" :key="index">
      <slot :item="item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScopeList',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>
