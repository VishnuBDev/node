const http = require('http')

const ser = http.createServer()

ser.on('request', (req, res) => {
  res.write("server running now")
  res.end()
})

ser.listen(5000)

ser.on("listening", () => {
  console.log("listening to  port 5000")
})