const EventEmitter = require("events");

//create class
class MyEmmiter extends EventEmitter {}

// Init object
const myEmmiter = new MyEmmiter();

//Event listener
myEmmiter.on("event", () => console.log("Event Fired!"));

// Init event
myEmmiter.emit("event");
myEmmiter.emit("event");
myEmmiter.emit("event");
myEmmiter.emit("event");