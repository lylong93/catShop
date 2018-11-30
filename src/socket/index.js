import io from 'socket.io-client';

const socket = io('http://localhost:8000/');

socket.open();
// socket.close();

socket.on('connect', () => {
	console.log('connect')
});



export const ioLogin = (shopname) => socket.emit('shopLogin', shopname);
export const ioServer = () => socket.emit('server', 'im server');
export const ioSendMsg = (msg) => socket.emit('shopMsg', msg);
export const ioRecMsg = (fn)=> socket.on('RecMsg',fn)