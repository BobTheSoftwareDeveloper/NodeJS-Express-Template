import dotenv from 'dotenv'

dotenv.config()

const config = {
  PORT: process.env.PORT || 4000,
  FIREBASE_SERVICE_ACCOUNT: process.env.FIREBASE_SERVICE_ACCOUNT,
  MONGODB_URI: process.env.MONGODB_URI,
  NODE_ENV: process.env.NODE_ENV || 'development',
}

export default config
