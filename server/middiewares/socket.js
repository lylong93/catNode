import socket from 'socket.io'

export default (server)=> {
		const io = socket(server)
		let arr = ['lyl','123','1','3','5']
		let num = 0
		io.on('connection', async (socket)=> {
			socket.id = arr[num]
			num++
			console.log(socket.id)
			socket.on('news', (data,fn)=> {
				console.log(data)
				fn('woot');
				socket.emit('server','surprise');
			});
			
		});	
		// io.sockets.socket('123').emit('server', ''); 
}
