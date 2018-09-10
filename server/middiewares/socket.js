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
			socket.on('server', (data)=> {
					console.log(data)
			});
			socket.on('sendMsg', (data)=> {
					console.log(data)
					const id = UserMap.get(data.to)
					io.to(id).emit('ggg','data.msg')
			});



			socket.on('disconnect', (data)=> {
					console.log(data)
			});

		});	 
}
