import tags from '../services/tags.service'
import _ from 'lodash'
import formatDate from '../utils/formatDate'

const state = {
  tags: [],
  currentTags: []
}
const mutations = {
  LOAD_TAGS (state, data) {
    state.tags = data
  },
  SET_CURRENT_TAGS (state, tags) {
    state.currentTags = tags
  },
  RESET_CURRENT_TAGS (state) {
    state.currentTags = []
  }
}
const getters = {
  getTagsList: (state) => () => {
    let list = _.flatMap(state.tags, (item) => {
      return {
        _id: item._id,
        title: item.title,
        videos: item.videos,
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
  },
  setCurrentTags: ({commit}, tags) => {
    commit('SET_CURRENT_TAGS', tags)
  },
  resetCurrentTags: ({commit}) => {
    commit('RESET_CURRENT_TAGS')
  }
}
export default {
  state,
  mutations,
  getters,
  actions
}
