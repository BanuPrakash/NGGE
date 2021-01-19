var EventEmitter = require('events').EventEmitter;

var LogEvent = new EventEmitter();

LogEvent.on("data", (data) => console.log(data));

LogEvent.on("error", (data) => console.log("Boom :" + data));


LogEvent.emit("data", "Learning Angular");
LogEvent.emit("data", "Learning node js now");

LogEvent.emit("error", "Problem :-(");