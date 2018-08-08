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
  }
}

export default categories
