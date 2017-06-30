import Vue from 'vue'

Vue.config.debug = process.env.NODE_ENV !== 'production'

// Axios
import axios from 'axios'

axios.defaults.baseURL = process.env.API_LOCATION
axios.defaults.headers.common.Accept = 'application/vnd.github.v3+json'

Object.defineProperty(Vue.prototype, '$http', {
  get () {
    return axios
  }
})

// Vue Router
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes
})

// Vue Material
import VueMaterial from 'vue-material'

Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red'
})

// Include project stylesheet
import './assets/sass/app.sass'

// Export
export default {
  router
}
