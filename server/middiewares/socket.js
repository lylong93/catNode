import socket from 'socket.io'

export default (server)=> {
		const io = socket(server)
		let num = 0
		io.on('connection', async (socket)=> {
			socket.on('news', (a)=> {
				console.log(a)
			});
		});	
}
