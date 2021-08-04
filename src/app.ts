import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import config from './config/config'
import { checkFirebaseToken } from './middlewares'
import { userRoute } from './routes'

const app = express()

app.use(cors())
app.use(express.json())

if (config.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Define a route handler for the default home page
app.get('/', async (req: Request, res: Response) => {
  res.status(200).send('A cool API :)')
})

// Atatch custom middlewares
app.use(checkFirebaseToken)

// Setup routes
app.use('/user', userRoute)

export { app }
