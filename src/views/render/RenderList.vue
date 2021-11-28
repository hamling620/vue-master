<template>
  <div>
    <template v-for="(item, index) in data">
      <div v-if="!render" :key="index">{{ item }}</div>
      <ListItem v-else :item="item" :render="render" :key="index" />
    </template>
  </div>
</template>

<script>
import ListItem from './ListItem'

export default {
  name: 'RenderList',
  components: {
    ListItem
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    render: Function
  }
}
</script>
