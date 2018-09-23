import socket from 'socket.io'
import mongoose from 'mongoose'
import {Shop,User,ShopMsg,UserMsg} from '../database/model.js'

const UserMap = new Map();

export default (server)=> {
		const io = socket(server)

		io.on('connection', async (socket)=> {

			socket.on('login', (data)=> {
					// UserMap.set(data, socket.id);
					// console.log(UserMap)
					// console.log(UserMap.size); 
			});
			//消息
			// shop发送信息
			socket.on('shopMsg', async (data)=> {
				console.log(data)
				// const _id = new mongoose.Types.ObjectId()

				// const {from,to,msg}  = data

				// const newMsg = new ShopMsg({_id,from,to})
				// const query = await newMsg.save()

				// const id = UserMap.get(data.to)

				// io.to(id).emit('ShopRecMsg',data.msg)
			
			});
			// user发送信息
			socket.on('usermsg', async (data)=> {
					console.log(data)
					const id = new mongoose.Types.ObjectId()
					const {from,to,msg}  = data
					
					const newChat = new UserMsg({_id:id,from,to,msg})
					const query = await newChat.save()

					// const id = UserMap.get(data.to)
					// io.to(id).emit('RecMsg',data.msg)
				
					// console.log(query)
					User.update({ username : "111"}, { $push : { firends: id}},function(err,result){
					  if (err) return console.error(err);
					  console.log(result);
					});
					const chatuser = await User.findOne({ username:'222'})
					console.log(chatuser)


					const _user = await User.findOne({ username:'111'}).populate('firends')
					console.log(_user)

				});
			//订单
			//
			socket.on('disconnect', (data)=> {
					console.log(data)
			});

		});	 
}
