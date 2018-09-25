import mongoose from 'mongoose'

import userSchema from './schema/user'
import shopSchema from './schema/shop'
import chatSchema from './schema/chat'

import shopMsgSchema from './schema/shopmsg'
import userMsgSchema from './schema/usermsg'

import sockIdSchema from './schema/sockid'


export const User = mongoose.model('user', userSchema)
export const Shop = mongoose.model('shop', shopSchema)
export const Chat = mongoose.model('chat', chatSchema)
export const ShopMsg = mongoose.model('shopmsg', shopMsgSchema)
export const UserMsg = mongoose.model('usermsg', userMsgSchema)
export const SockId = mongoose.model('sockid', sockIdSchema)