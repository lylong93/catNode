import socket from 'socket.io'
import {Shop,User,ShopMsg,UserMsg,Chat,SocketId} from '../database/models'

export default (server)=> {
		const io = socket(server)
		io.on('connection', async (socket)=> {
			socket.on('shopLogin', async (shopname)=> {
				console.log('shopLogin')
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
			socket.on('userLogin', async (username)=> {
				console.log('userLogin')
				try{
					let ioId = await SocketId.findOne({
						where: {name:username}
					})

					let user = await User.findOne({
						where:{username:username}
					})
					console.log(user)
					if(!ioId) { 
						console.log('no id')
						await SocketId.create({
							name:username,
							socketid:socket.id,
							userId:user.id
						})
					}else {
						await ioId.update({
							'socketid':socket.id,
							'userId':user.id
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
						where: {shopname:from}
					})
					let user = await User.findOne({
						where: {username:to}
					})
					let ioId = await SocketId.findOne({
						where: {name:shopname}
					})
					await Chat.create({
						msg,
						userId:user.id,
						shopId:shop.id
					})

					io.to(ioId.socketid).emit('ShopRecMsg',msg)
				} catch(err) {
					console.log(err)
				}			
			});
			// user发送信息
			socket.on('userMsg', async (data)=> {
				const {from,to,msg} = data
				try{
					let shop = await Shop.findOne({
						where: {username:from}
					})
					let user = await User.findOne({
						where: {username:to}
					})
					let ioId = await SocketId.findOne({
						where: {name:shopname}
					})
					await Chat.create({
						msg,
						userId:user.id,
						shopId:shop.id
					})

					io.to(ioId.socketid).emit('UserRecMsg',msg)
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