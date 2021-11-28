<template>
  <div>
    <Heading :level="1">一级标题</Heading>
    <Heading :level="2">二级标题</Heading>
    <Heading :level="3">三级标题</Heading>
    <Heading :level="4">四级标题</Heading>
    <Heading :level="5">五级标题</Heading>
    <Heading :level="6">六级标题</Heading>
    <RenderList :data="data" :render="render" />
    <ScopeList :data="data">
      <template v-slot="{ item }">
        {{ item }}
      </template>
    </ScopeList>
  </div>
</template>

<script>
import Heading from './Heading'
import RenderList from './RenderList'
import ScopeList from './ScopeList'

export default {
  name: 'Render',
  components: {
    Heading,
    RenderList,
    ScopeList
  },
  data () {
    return {
      data: ['香蕉', '苹果', '橘子']
    }
  },
  methods: {
    render (h, item) {
      return h('span', { style: { color: '#E44444' } }, item)
    }
  }
}
</script>
