import Vue from 'vue'

Vue.config.debug = process.env.NODE_ENV !== 'production'

import axios from 'axios'

axios.defaults.baseURL = process.env.API_LOCATION
axios.defaults.headers.common.Accept = 'application/vnd.github.v3+json'

Object.defineProperty(Vue.prototype, '$http', {
  get () {
    return axios
  }
})

import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes
})

import './assets/sass/app.sass'

export default {
  router
}
