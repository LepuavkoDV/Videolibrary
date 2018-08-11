import videos from '../services/videos.service'
import _ from 'lodash'

const state = {
  videos: [],
  currentVideoId: null,
  videosLoaded: false
}
const mutations = {
  LOAD_VIDEOS (state, data) {
    state.videos = data
    state.videosLoaded = true
  },
  SET_CURRENT_VIDEO_ID (state, id) {
    state.currentVideoId = id
  },
  RESET_CURRENT_VIDEO_ID (state) {
    state.currentVideoId = null
  }
}

const getters = {
  getVideosList: (state) => () => {
    return state.videos
  },
  getVideoById: (state) => (id) => {
    const video = _.find(state.videos, (i) => {
      return i._id === id
    })
    if (video !== undefined) {
      return video
    }
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
  },
  setCurrentVideoId: ({commit}, id) => {
    commit('SET_CURRENT_VIDEO_ID', id)
  },
  resetCurrentVideoId: ({commit}) => {
    commit('RESET_CURRENT_VIDEO_ID')
  },
  updateVideoTags: ({dispatch, rootState, state}) => {
    const data = {
      _id: state.currentVideoId,
      tags: rootState.tags.currentTags
    }
    return videos.updateTags(data).then(res => {
      dispatch('loadVideos')
      dispatch('loadTags')
      dispatch('loadCategories')
      dispatch('resetCurrentVideoId')
      dispatch('resetCurrentTags')
    })
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
