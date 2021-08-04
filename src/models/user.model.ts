import { Schema } from 'mongoose'
import { mongooseConnection } from '../utils/mongoose'
import { UserType } from '../types'

const userSchema = new Schema<UserType>({
  uid: {
    type: String,
    index: true,
    required: true,
  },
})

const UserModel = mongooseConnection.model<UserType>('users', userSchema)

export { UserModel }
