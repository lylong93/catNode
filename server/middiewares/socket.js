import socket from 'socket.io'
import {Shop,User,ShopMsg,UserMsg,Chat,SocketId} from '../database/models'

export default (server)=> {
		const io = socket(server)
		io.on('connection', async (socket)=> {
			socket.on('shopLogin', async (id)=> {
				try{
					let ioId = await SocketId.findOne({
						where: {baseId:id,type:1}
					})
					if(!ioId) { 
						await SocketId.create({
							baseId:id,
							socketId:socket.id,
							type:1
						})
					}else {
						await ioId.update({
							'socketId':socket.id,
						})
					}

				}catch(err) {
					console.log(err)
				}
			});
			socket.on('userLogin', async (id)=> {
				// console.log(username)
				try{
					let ioId = await SocketId.findOne({
						where: {baseId:id,type:0}
					})

					let user = await User.findOne({
						where:{id}
					})
					if(!ioId) { 
						await SocketId.create({
							baseId:id,
							socketid:socket.id,
							type:0
						})
					}else {
						await ioId.update({
							'socketid':socket.id,
							'userId':id
						})
					}
				}catch(err) {
					console.log(err)
				}
			});
			// shop发送信息
			socket.on('shopMsg', async (data)=> {
				const {from,to,msg} = data
				try{
					let shop = await Shop.findOne({
						where: {id:from}
					})
					let user = await User.findOne({
						where: {id:to}
					})
					let ioId = await SocketId.findOne({
						where: {baseId:id,type:0}
					})
					await Chat.create({
						msg,
						userId:user.id,
						shopId:shop.id
					})

					io.to(ioId.socketid).emit('shopRecMsg',msg)
				} catch(err) {
					console.log(err)
				}			
			});
			// user发送信息
			socket.on('userMsg', async (data)=> {
				const {from,to,msg} = data
				try{
					let shop = await Shop.findOne({
						where: {id:to}
					})
					let user = await User.findOne({
						where: {id:from}
					})
					let ioId = await SocketId.findOne({
						where: {baseId:id,type:1}
					})
					// console.log(user)
					await Chat.create({
						msg,
						userId:user.id,
						shopId:shop.id
					})
					io.to(ioId.socketid).emit('userRecMsg',msg)
				} catch(err) {
					console.log(err)
				}			
			});
			//订单
			// socket.on('disconnect', (data)=> {
			// 		console.log(data)
			// });
		});	 
}