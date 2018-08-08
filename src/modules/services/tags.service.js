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
  }
}

export default tags
