const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

var chat = [];
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (msg) => {
        console.log(msg);
        chat.push(msg);
        socket.broadcast.emit('message-broadcast', chat);
    });
});

http.listen(3000, () => {
    console.log("Server is started!");
});