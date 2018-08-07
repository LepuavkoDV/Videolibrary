import dotenv from 'dotenv'
dotenv.config()
/* eslint-disable import/first */
import express from 'express'
import path from 'path'
import serveStatic from 'serve-static'
import history from 'connect-history-api-fallback'
import cors from 'cors'
import bodyParer from 'body-parser'
import Debug from 'debug'
import morgan from 'morgan'

const debug = Debug('server:*')

const port = process.env.PORT || 5000
const webServer = express()

webServer.use(morgan('dev'))
webServer.use(cors({ origin: '*' }))
webServer.use(bodyParer.json())
webServer.use(history({}))
webServer.use(serveStatic(path.join(__dirname, '..', 'dist')))

webServer.listen(port, () => debug('Web Server listening on port =', port, 'ENV =', process.env.NODE_ENV))
