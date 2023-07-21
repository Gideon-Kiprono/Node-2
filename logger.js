const EventEmmiter = require("events");
// const uuid = require("uuid");

class Logger extends EventEmmiter {
  log(msg) {
    //Call eevnt
    this.emit("message", msg);
  }
}
module.exports = Logger;
