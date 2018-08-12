import mongoose from 'mongoose'

import userSchema from './schema/user'

export const User = mongoose.model('User', userSchema)