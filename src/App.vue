<template>
  <div>
    <md-toolbar class='md-medium'>
      <md-button class='md-icon-button' @click.native='toggleSidenav'>
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class='md-title' style='flex: 1;'>GitHubApplication</h2>

      <md-input-container style='flex: 1;'>
        <md-input placeholder='Search username'></md-input>
      </md-input-container>
    </md-toolbar>

    <md-sidenav ref='sidenav' class='md-left'>
      <md-toolbar class='md-medium'>
        <md-button class='md-icon-button' @click.native='toggleSidenav'>
          <md-icon>menu</md-icon>
        </md-button>
        <h2 class='md-title'>GitHubApp</h2>
      </md-toolbar>
    </md-sidenav>

    <div class='main-content'>
      <md-layout>
        <router-view></router-view>
      </md-layout>
    </div>
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
    },

    toggleSidenav () {
      this.$refs.sidenav.toggle()
    }
  },

  mounted () {
    this.fetchUser('evgeniy28')
  }
}
</script>

<style>
</style>
