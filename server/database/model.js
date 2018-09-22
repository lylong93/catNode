import mongoose from 'mongoose'

import userSchema from './schema/user'
import shopSchema from './schema/shop'
import chatSchema from './schema/chat'
import shopMsgSchema from './schema/shopmsg'
import userMsgSchema from './schema/usermsg'

export const User = mongoose.model('user', userSchema)
export const Shop = mongoose.model('shop', shopSchema)
export const Chat = mongoose.model('chat', chatSchema)
export const shopMsg = mongoose.model('shopmsg', shopMsgSchema)
export const usermsg = mongoose.model('usermsg', userMsgSchema)