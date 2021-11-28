export default {
  name: 'ListItem',
  props: {
    item: String,
    render: Function
  },
  render (h) {
    return this.render(h, this.item)
  }
}
