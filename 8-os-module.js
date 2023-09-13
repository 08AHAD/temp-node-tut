//OS module
//Interacting with the OS and server(properties and methods )

const { log } = require('console');
const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user);

//returns the system uptime in seconds 
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currentOs);