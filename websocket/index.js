const fs = require('fs');
const http = require('http').createServer((request, response) => {
    fs.readFile('./index.html', 'utf-8', function (error, content) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(content);
    });
});
const io = require('socket.io')(http);

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('chat message', function (message) {
        console.log('message ' + message);
        io.emit('chat message', message);
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    })
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});
