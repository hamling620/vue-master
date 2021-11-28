<template>
  <div>
    <!-- <router-link to="/">主页</router-link>
    <router-link to="/login">登录</router-link>
    <router-link to="/profile">用户</router-link> -->
    <Render />
    <EditTable />
  </div>
</template>

<script>
import Render from '@/views/render'
import EditTable from '@/views/EditTable'

export default {
  components: {
    Render,
    EditTable
  }
}
</script>
