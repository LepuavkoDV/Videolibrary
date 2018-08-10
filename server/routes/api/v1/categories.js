import express from 'express'
import Categories from '../../../controllers/categories.controller'
import Videos from '../../../controllers/videos.controller'

const api = express.Router()

api.get('/', (req, res) => {
  Categories.list().then(result => {
    res.status(result.status).send(result.data)
  })
})

api.post('/', (req, res) => {
  Categories.add(req.body).then(result => {
    res.status(result.status).send(result.data)
  })
})

api.get('/:id/videos', (req, res) => {
  Videos.list({ type: 'category', id: req.params.id }).then(result => {
    res.status(result.status).send(result.data)
  })
})

api.get('/:id/updateRelations', (req, res) => {
  Categories.updateRelations(req.params.id).then(result => {
    res.status(result.status).send(result.data)
  })
})

export default api
