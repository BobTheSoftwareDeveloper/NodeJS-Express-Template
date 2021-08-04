import mongoose from 'mongoose'
import config from '../config/config'

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

const mongooseConnection = mongoose.createConnection(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongooseConnection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

export { mongooseConnection }
