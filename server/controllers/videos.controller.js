import result from '../system/result'
import { Video } from '../models/Video'

const videos = {
  async list () {
    try {
      result.data = await Video.find().populate('category').populate('tags').sort('createdAt')
      result.status = 200
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  },

  async add (data) {
    try {
      const video = new Video({
        YTId: data.YTId,
        title: data.title,
        duration: data.duration,
        link: data.link,
        category: data.category,
        tags: data.tags,
        createdAt: new Date()
      })

      result.data = await video.save()
      result.status = 201
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  }
}

export default videos
