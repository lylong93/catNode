import socket from 'socket.io'

export default (server)=> {
		const io = socket(server)
		let num = 0
		io.on('connection', async (socket)=> {
			num++
			socket.id = num
			console.log(socket.id)
			socket.on('news', (name,fn)=> {
				// console.log(io.sockets)
				io.emit('server','im server')
				fn('woot');
			});
			socket.emit('server','im server msg')
		});	
}
