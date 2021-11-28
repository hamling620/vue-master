export default {
  name: 'Heading',
  props: {
    level: {
      type: Number,
      default: 0
    }
  },
  // render (h) {
  //   return h('h' + this.level, this.$slots.default)
  // }
  render (h) {
    const H = 'h' + this.level
    return <H>{ this.$slots.default }</H>
  }
}
