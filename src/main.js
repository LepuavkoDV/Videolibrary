/* eslint-disable import/first */
import Vue from 'vue'
import App from './App.vue'
import router from './modules/router'
import store from './modules/store'

import 'bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faFolderOpen, faTags, faHome, faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPlus)
library.add(faFolderOpen)
library.add(faTags)
library.add(faHome)
library.add(faCogs)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import Notifications from 'vue-notification'
Vue.use(Notifications)

import ProgressBar from 'vue-progressbar-component'
Vue.component('progress-bar', ProgressBar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
