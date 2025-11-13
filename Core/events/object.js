// We in index.js you've learn the usage of event in Node.JS
// now we will use the Object class to create an event emitter.
// It provides a way to decouple components and make them more modular and reusable.
// It allows you to register event listeners and emit events to trigger those listeners.
// It is a fundamental concept in Node.js and is used extensively in building scalable and efficient applications.
// It provides a way to decouple components and make them more modular and reusable.

import events from "node:events";

let Emitter = new events.EventEmitter();

// create an Event Handler
let eventHandler = function () {
  console.log("Walking");
};

// Assign the Event Handler to an event
Emitter.on("Walk", eventHandler);

// Fire the Event
Emitter.emit("Walk");

// Now lets try add some parameter/arguments to new Event

Emitter.on("Running", (name) => {
  console.log(`${name} is Running`);
});

Emitter.emit("Running", "John");

// Also you can Emit it Multiple Time
Emitter.emit("Running", "Sam");
Emitter.emit("Running", "Zed");
Emitter.emit("Running", "Kj");

// But how about Emit it just once ?  you can use the .once in event so that even you call it multiple times it just fires once
Emitter.once("Connection", (name) => {
  console.log(`${name} lost its connection`);
});

Emitter.emit("Connection", "Sam");
Emitter.emit("Connection", "Zed"); // This wont work cause we use the once method which fires only once

// Also lets add an error handling
Emitter.on("error", (err) => {
  console.error("Error:", err);
});

Emitter.emit("error", new Error("Something went wrong"));
