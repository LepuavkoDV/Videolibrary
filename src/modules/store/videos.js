import videos from '../services/videos.service'
// import _ from 'lodash'
// import formatDate from '../utils/formatDate'

const state = {
  videos: []
}
const mutations = {
  LOAD_VIDEOS (state, data) {
    state.videos = data
  }
}

const getters = {
  getVideosList: (state) => () => {
    return state.videos
  }
}
const actions = {
  loadVideos: ({commit}) => {
    videos.list().then(res => {
      commit('LOAD_VIDEOS', res.data)
    })
  },
  addVideo: ({dispatch}, data) => {
    return videos.add(data).then(res => {
      dispatch('loadVideos')
    })
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
