<template>
  <div>
    用户名：{{ username }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Profile',
  computed: {
    ...mapState(['username'])
  }
}
</script>
