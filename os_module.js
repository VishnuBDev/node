const os = require('os');
console.log(`The name of the user is ${os.userInfo().username}`);
console.log(`The system is up for the last ${os.uptime()} seconds`)