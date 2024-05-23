import io from 'socket.io-client';

export const Socket = ()=>{
    const socket = io('http://localhost:3000');
    socket.on('Connect',()=>{
        console.log('Connect to server')
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
      });

      return socket

}