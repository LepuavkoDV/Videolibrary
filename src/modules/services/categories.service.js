import axios from 'axios'
import { apiUrl } from './api.config'

const categories = {
  async list () {
    try {
      const data = await axios.get(apiUrl + '/categories')
      return data
    } catch (error) {
      return error
    }
  },

  async add (data) {
    const category = {
      title: data.title
    }

    const res = await axios.post(apiUrl + '/categories', category)
    return res
  },

  async videos (id) {
    try {
      const data = await axios.get(apiUrl + '/categories/' + id + '/videos')
      return data
    } catch (error) {
      return error
    }
  }
}

export default categories
