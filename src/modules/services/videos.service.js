import axios from 'axios'
import { apiUrl } from './api.config'
import _ from 'lodash'
import moment from 'moment'
import 'moment-duration-format'

const videos = {
  async list () {
    try {
      const data = await axios.get(apiUrl + '/videos')
      return data
    } catch (error) {
      return error
    }
  },

  async add (data) {
    let tags = []
    _.forEach(data.tags, (tag) => {
      tags.push(tag._id)
    })

    const YTVideo = await this.YoutubeVideoInfo(this.getYoutubeVideoId(data.link))
    const duration = moment.duration(YTVideo.data.items[0].contentDetails.duration).asSeconds()
    let video = {
      YTId: this.getYoutubeVideoId(data.link),
      title: YTVideo.data.items[0].snippet.title,
      duration: duration,
      link: data.link,
      category: data.category._id,
      tags: tags
    }
    const res = await axios.post(apiUrl + '/videos', video)
    return res
  },

  async updateTags (data) {
    let tags = []
    _.forEach(data.tags, (tag) => {
      tags.push(tag._id)
    })
    const res = axios.post(apiUrl + '/videos/' + data._id + '/tags', { tags: tags })
    return res
  },

  getYoutubeVideoId (url) {
    /* eslint-disable no-useless-escape */
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    /* eslint-enable no-useless-escape */
    var match = url.match(regExp)

    if (match && match[2].length === 11) {
      return match[2]
    } else {
      return 'error'
    }
  },

  async YoutubeVideoInfo (id) {
    try {
      const params = {
        part: 'snippet,contentDetails,statistics',
        id: id,
        key: process.env.YOUTUBE_API_KEY
      }
      const data = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: params
      })
      return data
    } catch (error) {
      console.log(error)
    }
  }
}
export default videos
