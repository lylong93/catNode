import mongoose from 'mongoose'

import userSchema from './schema/user'
import chatSchema from './schema/chat'

export const User = mongoose.model('user', userSchema)
export const Chat = mongoose.model('chat', chatSchema)