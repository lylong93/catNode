import socket from 'socket.io'
import mongoose from 'mongoose'
import {Shop,User,ShopMsg,UserMsg,Chat,SockId} from '../database/model.js'

const UserMap = new Map();

export default (server)=> {
		const io = socket(server)

		io.on('connection', async (socket)=> {

			socket.on('shopLogin', async (data)=> {
					const shop = await Shop.findOne({username:data})
					
					const socketid = await SockId.findOne({user:shop._id})
					if(!socketid) {
						new SockId({user:shop._id,id:socket.id}).save()
					}else {
						 await SockId.update({user:shop._id},{$set:{id:socket.id}})
					}
			});
			socket.on('userLogin', async (data)=> {
					const user = await User.findOne({username:data})
					
					const socketid = await SockId.findOne({user:user._id})
					if(!socketid) {
						new SockId({user:user._id,id:socket.id}).save()
					}else {
						 await SockId.update({user:user._id},{$set:{id:socket.id}})
					}
			});
			//消息
			// shop发送信息
			socket.on('shopMsg', async (data)=> {

				const {from,to,msg} = data

				const id = new mongoose.Types.ObjectId()

				const [shopid,userid] = await Promise.all([
				   Shop.findOne({'username':from},{_id:1}),
					 User.findOne({'username':to},{_id:1})
				  ]
				 )

				const newMsg = new Chat({'from':shopid,'to':userid,'msg':msg,'_id':id})
	
				const query = await new Chat({'from':shopid,'to':userid,'msg':msg,'_id':id}).save()

				await Promise.all([
				  Shop.update({ username:from}, { $push : { msgs: id}}),
				  User.update({ username:to}, { $push : { msgs: id}})
				  ]
				 )
				const socketid=await SockId.findOne({user:userid})
				io.to(socketid.id).emit('ShopRecMsg',data.msg)
			
			});
			// user发送信息
			// socket.on('usermsg', async (data)=> {
			// 		console.log(data)
			// 		const id = new mongoose.Types.ObjectId()
			// 		const {from,to,msg}  = data
					
			// 		const newChat = new UserMsg({_id:id,from,to,msg})
			// 		const query = await newChat.save()

			// 		// const id = UserMap.get(data.to)
			// 		// io.to(id).emit('RecMsg',data.msg)
				
			// 		// console.log(query)
			// 		User.update({ username : "111"}, { $push : { firends: id}},function(err,result){
			// 		  if (err) return console.error(err);
			// 		  console.log(result);
			// 		});
			// 		const chatuser = await User.findOne({ username:'222'})
			// 		console.log(chatuser)


			// 		const _user = await User.findOne({ username:'111'}).populate('firends')
			// 		console.log(_user)

			// 	});
			//订单
			//
			// socket.on('disconnect', (data)=> {
			// 		console.log(data)
			// });

		});	 
}
