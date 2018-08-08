import express from 'express'
import Tags from '../../../controllers/tags.controller'

const api = express.Router()

api.get('/', (req, res) => {
  Tags.list().then(result => {
    res.status(result.status).send(result.data)
  })
})

api.post('/', (req, res) => {
  Tags.add(req.body).then(result => {
    res.status(result.status).send(result.data)
  })
})

export default api
