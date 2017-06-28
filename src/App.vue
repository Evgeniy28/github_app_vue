<template>
  <div>
    <pre>{{ user }}</pre>
    <router-view></router-view>
  </div>
</template>

<script>
import { router } from './bootstrap'

export default {
  name: 'GitHubApplication',

  router,

  data () {
    return {
      user: null
    }
  },

  methods: {
    fetchUser (username) {
      this.$http.get(`users/${username}`)
        .then((res) => {
          this.user = res.data
        })
    }
  },

  mounted () {
    this.fetchUser('evgeniy28')
  }
}
</script>

<style>
</style>
