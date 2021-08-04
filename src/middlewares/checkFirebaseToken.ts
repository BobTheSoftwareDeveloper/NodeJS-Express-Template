import { Request, Response, NextFunction } from 'express'
import { admin } from '../utils/firebase'

// middleware to check that the given token is correct
const checkFirebaseToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let firebaseToken = (req.headers.authorization as string) ?? ''
    firebaseToken = firebaseToken.replace('Bearer ', '').trim()
    if (firebaseToken == null) {
      return res.status(401).send('Unauthorized.')
    }

    const tokenData = await admin.auth().verifyIdToken(firebaseToken)
    const uid = tokenData.uid || ''

    req.headers.uid = uid

    return next()
  } catch (err) {
    return res.status(401).json({ status: 'error', error: err.message })
  }
}

export default checkFirebaseToken
