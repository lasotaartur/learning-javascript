console.log('Hello world');
console.log(process);

const server = require('http').createServer((request, response) => {
    response.end('Hello World');
    console.log('request');
    console.log(request);
    console.log('response');
    console.log(response);
});

server.listen(3000);

console.log('Server listening at port 3000');
