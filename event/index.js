const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.once('event', () => {
    console.log(`This is event`)
});

myEmitter.on('event2', (message) => {
    console.log(`This is event2:${message}`)
});

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event2', 'My secret message');