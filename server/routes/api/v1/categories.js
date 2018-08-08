import express from 'express'
import Categories from '../../../controllers/categories.controller'

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

export default api
