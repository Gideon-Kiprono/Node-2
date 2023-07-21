const { log } = require('console');
const os = require('os')

//platforms
console.log(os.platform());

//cpu architecture
console.log(os.arch());

//CPU cre info
console.log(os.cpus());

//Free memory
console.log(os.freemem());

//Total memory
console.log(os.totalmem());

//Home dir
console.log(os.homedir());

//Uptime
console.log(os.uptime());