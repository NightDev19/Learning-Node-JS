// Event in Node Js is a way to handle asynchronous events in Node.js.
// It allows you to register event listeners and emit events to trigger those listeners.
// It is a fundamental concept in Node.js and is used extensively in building scalable and efficient applications.
// It provides a way to decouple components and make them more modular and reusable.

// Basic Example
import EventEmitter from 'node:events';

const Emitter = new EventEmitter();

Emitter.on('greet',()=>{
	console.log('Hello There!');
})

Emitter.emit('greet')

