export function broadcast (event, value) {
  const broadcast = (children) => {
    children.forEach(child => {
      child.emit(event, value)
      if (child.$children) {
        broadcast(child.$children)
      }
    })
  }
  broadcast(this.$children)
}

// broadcast 向下广播事件
