import result from '../system/result'
import { Tag } from '../models/Tag'

const tags = {
  async list () {
    try {
      result.data = await Tag.find().populate('videos').sort('createdAt')
      result.status = 200
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  },

  async add (data) {
    try {
      const tag = new Tag({
        title: data.title,
        createdAt: new Date()
      })

      result.data = await tag.save()
      result.status = 201
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  }
}

export default tags
