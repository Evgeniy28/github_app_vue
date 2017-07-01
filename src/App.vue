<template>
  <div>
    <md-toolbar class='md-medium'>
      <md-button class='md-icon-button' @click.native='toggleSidenav'>
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class='md-title' style='flex: 1;'>GitHubApplication</h2>

      <md-input-container style='flex: 1;'>
        <md-input
          placeholder='Search username'
          v-model='username'
        ></md-input>
      </md-input-container>
    </md-toolbar>

    <md-sidenav ref='sidenav' class='md-left'>
      <md-toolbar class='md-medium'>
        <md-button class='md-icon-button' @click.native='toggleSidenav'>
          <md-icon>menu</md-icon>
        </md-button>
        <h2 class='md-title'>GitHubApp</h2>
      </md-toolbar>
      <md-list class="custom-list md-triple-line">
        <md-list-item>
          <router-link
            :to="{ name: 'repositories' }"
            @click.native='closeSidenav'
          >
            Repositories
          </router-link>
        </md-list-item>
        <md-list-item>
          <router-link
            :to="{ name: 'user' }"
            @click.native='closeSidenav'
          >
            User
          </router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <div class='main-content'>
      <md-layout>
        <router-view></router-view>
      </md-layout>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { router } from './bootstrap'

export default {
  name: 'GitHubApplication',

  router,

  data () {
    return {
      user: null,
      username: null,
      repositories: []
    }
  },

  watch: {
    username (value) {
      this.setUsername(value)
    }
  },

  methods: {
    fetchUser (username) {
      this.$http.get(`users/${username}`)
        .then(({ data }) => {
          this.user = data
        })
    },

    fetchRepositories (username) {
      this.$http.get(`users/${username}/repos`)
        .then(({ data }) => {
          this.repositories = data
        })
    },

    toggleSidenav () {
      this.$refs.sidenav.toggle()
    },

    closeSidenav () {
      this.$refs.sidenav.close()
    },

    setUsername: _.debounce(function(username) {
      if (username) {
        this.fetchUser(username)
        this.fetchRepositories(username)
      }

      if (!username) {
        this.user = null
        this.repositories = []
      }
    }, 500)
  }
}
</script>

<style>
</style>
