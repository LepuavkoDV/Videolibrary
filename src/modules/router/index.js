import Vue from 'vue'
import Router from 'vue-router'
import Home from '../../views/Home'
import Tags from '../../views/Tags'
import Tag from '../../views/Tag'

Vue.use(Router)

const routes = [
  { path: '/', name: '/', component: Home },
  { path: '/tags', name: 'tags', component: Tags },
  { path: '/tags/:tagName', name: 'tag-listing', component: Tag }
  // { path: '/*', name: '404', component: p404 }
]

export default new Router({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
