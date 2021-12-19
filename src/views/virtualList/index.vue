<template>
  <div>
    <VirtualList :items="items" :size="40" :remain="8">
      <template v-slot="{item}">
        <div style="height:40px">{{ item.value }}</div>
      </template>
    </VirtualList>
  </div>
</template>

<script>
import VirtualList from '@/components/VirtualList'
const items = []
for (let i = 0; i < 10000; i++) {
  items.push({
    id: i,
    value: i + 1
  })
}

export default {
  components: {
    VirtualList
  },
  data () {
    return {
      items
    }
  }
}
</script>

<style>
</style>
