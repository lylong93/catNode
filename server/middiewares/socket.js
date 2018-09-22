import socket from 'socket.io'
import {Chat,User} from '../database/model.js'

const UserMap = new Map();

export default (server)=> {
		const io = socket(server)

		io.on('connection', async (socket)=> {

			socket.on('news', (data,fn)=> {
				console.log(data)
				fn('woot');
			});
			socket.on('login', (data)=> {
					UserMap.set(data, socket.id);
					console.log(UserMap)
					console.log(UserMap.size); 
			});
			//消息
			// shop发送信息
			socket.on('sendMsg', async (data)=> {
					console.log(data)
					const id = new mongoose.Types.ObjectId()
					const {from,to,msg}  = data

		
					const newChat = new Chat({from,to,_id:id})
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

			// user发送信息
			socket.on('sendMsg', async (data)=> {
					console.log(data)
					const id = new mongoose.Types.ObjectId()
					const {from,to,msg}  = data

		
					const newChat = new Chat({from,to,_id:id})
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
