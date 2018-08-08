import result from '../system/result'
import { Category } from '../models/Category'

const categories = {
  async list () {
    try {
      result.data = await Category.find().populate('videos').sort('createdAt')
      result.status = 200
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  },

  async add (data) {
    try {
      const category = new Category({
        title: data.title,
        createdAt: new Date()
      })

      result.data = await category.save()
      result.status = 201
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  }
}

export default categories
