import Vue from 'vue'
import Router from 'vue-router'
import Home from '../../views/Home'
import Categories from '../../views/Categories'
import Category from '../../views/Category'
import Tags from '../../views/Tags'

Vue.use(Router)

const routes = [
  { path: '/', name: '/', component: Home },
  { path: '/categories', name: 'categories', component: Categories },
  { path: '/categories/:categoryName', name: 'category-listing', component: Category },
  { path: '/tags', name: 'tags', component: Tags }
  // { path: '/*', name: '404', component: p404 }
]

export default new Router({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
