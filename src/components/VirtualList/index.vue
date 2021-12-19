<template>
  <div class="virtual-list-container" ref="container" @scroll="handleScroll">
    <div class="virtual-list-scrollbar" ref="scrollbar"></div>
    <ul class="virtual-list" :style="{transform: `translateY(${offset}px)`}">
      <li v-for="item in visibleData" :key="item.id">
        <slot :item="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'virtualList',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    size: {
      type: Number,
      default: 0
    },
    remain: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      start: 0,
      end: this.remain,
      offset: 0
    }
  },
  computed: {
    prevCount () {
      return Math.min(this.start, this.remain)
    },
    nextCount () {
      return Math.min(this.remain, this.items.length - this.end)
    },
    visibleData () {
      const start = this.start - this.prevCount
      const end = this.end + this.nextCount
      return this.items.slice(start, end)
    }
  },
  mounted () {
    this.$refs.container.style.height = this.size * this.remain + 'px'
    this.$refs.scrollbar.style.height = this.size * this.items.length + 'px'
  },
  methods: {
    handleScroll () {
      const scrollTop = this.$refs.container.scrollTop
      this.start = Math.floor(scrollTop / this.size)
      this.end = this.start + this.remain
      this.offset = (this.start - this.prevCount) * this.size
    }
  }
}
</script>

<style lang="scss" scoped>
.virtual-list-container {
  overflow-y: scroll;
  position: relative;
  background: beige;
  .virtual-list {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
