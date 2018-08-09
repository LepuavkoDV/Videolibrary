import categories from '../services/categories.service'
import _ from 'lodash'
import formatDate from '../utils/formatDate'

const state = {
  categories: []
}
const mutations = {
  LOAD_CATEGORIES (state, data) {
    state.categories = data
  }
}
const getters = {
  getCategoriesList: (state) => () => {
    let list = _.flatMap(state.categories, (item) => {
      return {
        _id: item._id,
        title: item.title,
        createdAt: formatDate(item.createdAt)
      }
    })
    return list
  }
}
const actions = {
  loadCategories: ({commit}) => {
    categories.list().then(res => {
      commit('LOAD_CATEGORIES', res.data)
    })
  },
  addCategory: ({dispatch}, data) => {
    return categories.add(data).then(res => {
      dispatch('loadCategories')
    })
  }

}
export default {
  state,
  mutations,
  getters,
  actions
}
