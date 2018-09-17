import socket from 'socket.io'
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

			// 发送信息
			socket.on('sendMsg', (data)=> {
					console.log(data)
					const id = UserMap.get(data.to)
					io.to(id).emit('RecMsg',data.msg)
			});


			socket.on('disconnect', (data)=> {
					console.log(data)
			});

		});	 
}
