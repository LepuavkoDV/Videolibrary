import Vue from 'vue'
import Router from 'vue-router'
import Home from '../../views/Home'
import Items from '../../views/Items'
import Item from '../../views/Item'

Vue.use(Router)

const routes = [
  { path: '/', name: '/', component: Home },
  { path: '/categories', name: 'categories', component: Items },
  { path: '/categories/:categoryName', name: 'category-listing', component: Item },
  { path: '/tags', name: 'tags', component: Items },
  { path: '/tags/:tagName', name: 'tag-listing', component: Item }
  // { path: '/*', name: '404', component: p404 }
]

export default new Router({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
