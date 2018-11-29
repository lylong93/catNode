import socket from 'socket.io'
import {Shop,User,ShopMsg,UserMsg,Chat,SocketId} from '../database/models'

export default (server)=> {
		const io = socket(server)
		io.on('connection', async (socket)=> {
			socket.on('shopLogin', async (shopname)=> {
					try{
						let ioId = await SocketId.findOne({
							where: {name:shopname}
						})
						let shop = await Shop.findOne({
							where:{shopname}
						})
						if(!ioId) { 
							await SocketId.create({
								name:shopname,
								socketid:socket.id,
								shopId:shop.id
							})
						}else {
							await ioId.update({
								'socketid':socket.id,
								'shopId':shop.id
							})
						}
					}catch(err) {
						console.log(err)
					}
			});
			socket.on('userLogin', async (data)=> {
					let user = await User.findOne({username:data})
					let socketid = await SockId.findOne({user:user._id})
					if(!socketid) {
						new SockId({user:user._id,id:socket.id}).save()
					}else {
						await SockId.update({user:user._id},{$set:{id:socket.id}})
					}
			});
			// shop发送信息
			socket.on('shopMsg', async (data)=> {
				const {from,to,msg} = data
				try{
					let shop = await Shop.findOne({
						where: {shopname:from}
					})
					let user = await User.findOne({
						where: {username:to}
					})
					
					await Chat.create({
						msg,
						userId:user.id,
						shopId:shop.id
					})			
				} catch(err) {
					console.log(err)
				}

				// io.to(socketid.id).emit('ShopRecMsg',data.msg)
				// const [shopid,userid] = await Promise.all([
				//    Shop.findOne({'username':from},{_id:1}),
				// 	 User.findOne({'username':to},{_id:1})
				//   ]
				//  )


				// await Promise.all([
				//   Shop.update({ username:from}, { $push : { msgs: id}}),
				//   User.update({ username:to}, { $push : { msgs: id}})
				//   ]
				//  )
				// const socketid=await SockId.findOne({user:userid})
				// io.to(socketid.id).emit('ShopRecMsg',data.msg)
			
			});
			// // user发送信息
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
