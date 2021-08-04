import admin from 'firebase-admin'
import config from '../config/config'
import { errorHandler } from './errorHandler'

admin.initializeApp({
  credential: admin.credential.cert(config.FIREBASE_SERVICE_ACCOUNT),
})

export const generateCustomToken = async (uid: string): Promise<string> => {
  try {
    const customToken = await admin.auth().createCustomToken(uid)
    return customToken
  } catch (err) {
    errorHandler(err, 'generateCustomToken')
    return Promise.reject(err)
  }
}

export { admin }
