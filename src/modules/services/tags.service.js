import axios from 'axios'
import { apiUrl } from './api.config'

const tags = {
  async list () {
    try {
      const data = await axios.get(apiUrl + '/tags')
      return data
    } catch (error) {
      return error
    }
  },

  async add (data) {
    const tag = {
      title: data.title
    }
    const res = await axios.post(apiUrl + '/tags', tag)
    return res
  }
}

export default tags
