import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import serveStatic from 'serve-static'
import history from 'connect-history-api-fallback'
import cors from 'cors'
import bodyParer from 'body-parser'
import Debug from 'debug'
import morgan from 'morgan'

import Database from './database'

class Server {
  constructor () {
    dotenv.config()

    this.port = process.env.PORT || 5000
    this.debug = Debug('server:*')
    this.app = express()

    this.app.use(morgan('dev'))
    this.app.use(cors({ origin: '*' }))
    this.app.use(bodyParer.json())
    this.app.use(history({}))
    this.app.use(serveStatic(path.join(__dirname, '../..', 'dist')))

    this.database = new Database()
  }

  run () {
    this.debug('Environment:', process.env.NODE_ENV)

    this.database.connect().then((res) => {
      this.debug('Mongoose connected to:', res.connections[0].host)
    })

    this.app.listen(this.port, () => this.debug('WebServer listening on port:', this.port))
  }
}

export default Server
