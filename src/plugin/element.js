import { Table, TableColumn, Input } from 'element-ui'

export default {
  install (Vue) {
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Input)
  }
}
