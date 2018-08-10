import result from '../system/result'
import { Category } from '../models/Category'
import { Video } from '../models/Video'
import _ from 'lodash'
import mongoose from 'mongoose'

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
  },

  async updateRelations (category) {
    try {
      // find all videos related to this category
      const videosRelatedToThisCategory = await Video.find({ category: mongoose.Types.ObjectId(category) })
      let videos = []
      _.each(videosRelatedToThisCategory, (item) => {
        videos.push(item._id)
      })
      // and update tag > video relation
      await Category.findByIdAndUpdate(category, {
        $set: { videos: videos }
      }, { new: false }, (err, category) => {
        if (err) {
          result.data = err
          result.status = 500
        }
      })
      result.data = {}
      result.status = 200
    } catch (error) {
      result.data = error
      result.status = 500
    }
    return result
  }
}

export default categories
