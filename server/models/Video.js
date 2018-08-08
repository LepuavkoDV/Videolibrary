import mongoose from 'mongoose'
import relationship from 'mongoose-relationship'
/* eslint-disable no-unused-vars */
import { Category } from './Category'
import { Tag } from './Tag'

const Schema = mongoose.Schema

const VideoSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  duration: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', childPath: 'videos' },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag', childPath: 'videos' }],
  createdAt: { type: Date }
})

VideoSchema.plugin(relationship, { relationshipPathName: 'category' })
VideoSchema.plugin(relationship, { relationshipPathName: 'tags' })

export const Video = mongoose.model('Video', VideoSchema)
