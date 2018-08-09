import tags from '../services/tags.service'
import _ from 'lodash'
import formatDate from '../utils/formatDate'

const state = {
  tags: []
}
const mutations = {
  LOAD_TAGS (state, data) {
    state.tags = data
  }
}
const getters = {
  getTagsList: (state) => () => {
    let list = _.flatMap(state.tags, (item) => {
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
  loadTags: ({commit}) => {
    tags.list().then(res => {
      commit('LOAD_TAGS', res.data)
    })
  },
  addTag: ({dispatch}, data) => {
    return tags.add(data).then(res => {
      dispatch('loadTags')
    })
  }
}
export default {
  state,
  mutations,
  getters,
  actions
}
