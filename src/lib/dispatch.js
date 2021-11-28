export default function (event, value) {
  let parent = this.$parent
  while (parent) {
    parent.$emit(event, value)
    parent = parent.$parent
  }
}

// dispatch 向上传递数据
