import Vue from 'vue'
import App from './App.vue'
import router from './modules/router'
import store from './modules/store'

import 'bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faFolderOpen, faTags, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPlus)
library.add(faFolderOpen)
library.add(faTags)
library.add(faUsers)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
