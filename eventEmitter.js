const eventEmitter = require('events')

const customEmitter = new eventEmitter()

customEmitter.on('request', () => {
  console.log("this is the content of the callback function when the event:request is triggered")
})

customEmitter.on('r2', (name, age) => {
  console.log(`R2 event is now triggered by ${name} having age ${age}`)
})

customEmitter.emit("r2", "vishnu", 24)
customEmitter.emit("request")
