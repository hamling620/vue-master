# Vue组件通信

## 1. 单向数据流，父组件通过prop向子组件传递数据。

## 2. 父组件给子组件注册($on)自定义事件，子组件$emit父组件注册的事件，然后给事件回调传递参数，实现子组件向父组件通信。

  - 两种语法糖
  - v-model 等价于父组件给子组件传递value prop和input事件。子组件获取value prop，并且可以去emit('input', newVal)事件，并传入数据。
  - update:[name] 或者:name.sync 是父组件传递name prop并提供修改name的事件。子组件获取name prop，并且去emit('update:name', newVal)事件，并传入数据。

## 3. 通过EventBus(一个Vue的实例）跨组件通信。需要获得数据的组件通过监听($on)一个自定义事件，并从回调函数参数中获取数据；发送数据的组件释放($emit)这个组件，然后传递数据。

## 4. ref作用于元素上可以获取真实DOM元素，作用于组件上可以获取组件实例。可以通过this.$refs进行访问。

## 5. 可以通过$parent获取父组件实例，通过$children获取所有子组件实例集合。通过$dispatch可以向上级组件发送事件，通过$broadcast可以向下级组件广播事件。

## 6. 通过provide在父组件中注入数据，通过inject在所有以下跨层级组件中获取这个注入的数据。provide和inject绑定并不是响应式的，这是刻意为之。如果你传入了一个可监听的对象，那么它的property还是可响应的。

## 7. 父组件给子组件传递的非prop属性，默认会传递给子组件的根元素，但是通过设置子组件inheritAttrs选项为false，可以让子组件根元素不继承这些属性，子组件可以通过this.$attrs获取这个集合，并且可以通过v-bind="$attrs"传递给子组件的子组件，父组件传递给子组件的事件，可以通过this.$listeners获取事件集合，也可以通过v-on="$listeners'将其传递给子组件的子组件。

## 8. Vuex
