import io from 'socket.io-client';

const socket = io('http://localhost:8000/');

socket.open();


console.log('ooo')

socket.on('connect', () => {
	console.log('connect')
});
socket.on('ggg', (data) => {
	console.log(data)
});
// socket.on('disconnect', () => {
//     console.log('disconnect')
// });
// socket.on('error', () => {
//     console.log('error')
// });
// socket.on('server',(msg)=> {
//   console.log(msg)	
// });

export const ioLogin = (name) => socket.emit('login', name);
export const ioServer = () => socket.emit('server', 'im server');
export const ioSendMsg = (msg) => socket.emit('sendMsg', msg);