import socket from 'socket.io'
import {Shop,User,ShopMsg,UserMsg,Chat,SocketId,Order} from '../database/models'
import Timer from '@/untils/time'
export default (server)=> {
		const io = socket(server)
		io.on('connection', async (socket)=> {
			// 商户登录
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
			// 用户登录
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
					// 会话
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
					// 会话
					io.to(ioId.socketid).emit('userRecMsg',msg)
				} catch(err) {
					console.log(err)
				}			
			});
			//下订单
			socket.on('order', async (data)=> {
			    const time = new Timer()
				let timedata= JSON.stringify(time)
				try{
					let order = await Order.create({
						orderNumber:'123',
						totlePice:'100',
						time:timedata
					})
				} catch(err) {

				}
			});
			//完成订单
			socket.on('endOrder', async (data)=> {

				let order = await Order.findOne({
					where:{orderNumber:'123'}
				})
				order.update({
					time:null
				})
				// io.to(ioId.socketid).emit('shopRecMsg',msg)
			});
		});	 
}