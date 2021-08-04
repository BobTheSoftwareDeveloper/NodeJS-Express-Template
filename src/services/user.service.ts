import { UserModel } from '../models'
import { UserType } from '../types'

export const getUserDetails = async (uid: string): Promise<UserType | null> => {
  try {
    const userObj = await UserModel.findOne({ uid }).lean().exec()
    return userObj
  } catch (err) {
    return Promise.reject(err)
  }
}

export const addUser = async (uid: string, userObj: UserType): Promise<UserType | null> => {
  try {
    // Check if the user already exist
    const check = await UserModel.findOne({ uid }).lean()
    if (check !== null) {
      return Promise.resolve(null)
    }

    const doc = await new UserModel({ ...userObj, uid }).save()
    return Promise.resolve(doc)
  } catch (err) {
    return Promise.reject(err)
  }
}
