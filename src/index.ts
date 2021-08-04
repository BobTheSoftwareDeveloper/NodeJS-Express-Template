import http from 'http'
import config from './config/config'
import { app } from './app'
import { errorHandler } from './utils/errorHandler'

const port = config.PORT

process.on('uncaughtException', (err) => {
  errorHandler(err, 'uncaughtException')
})

const httpServer = new http.Server(app)

const server = httpServer.listen(port, () => {
  console.log(`Listening on *:${port}`)
})

export { server }
