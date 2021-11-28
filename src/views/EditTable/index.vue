<template>
  <el-table :data="tableData">
    <el-table-column v-for="item in columns" :key="item.prop" :label="item.label" :prop="item.prop">
      <template slot-scope="scope">
        <div v-if="item.prop==='name'" @click="handleCurrentClick($event, scope.$index)">
          <span v-if="currentIndex!==scope.$index">{{ scope.row[item.prop] }}</span>
          <el-input v-else v-model="scope.row[item.prop]" @blur="handleBlur" />
        </div>
        <template v-else>{{ scope.row[item.prop] }}</template>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'EditTable',
  data () {
    return {
      columns: [
        { prop: 'name', label: 'Name' },
        { prop: 'age', label: 'Age' },
        { prop: 'address', label: 'Address' }
      ],
      tableData: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ],
      currentIndex: -1
    }
  },
  methods: {
    handleCurrentClick (event, index) {
      this.currentIndex = index
      this.$nextTick(() => {
        event.currentTarget?.getElementsByTagName('input')[0]?.focus()
      })
    },
    handleBlur () {
      this.currentIndex = -1
      console.log(this.tableData)
    }
  }
}
</script>
