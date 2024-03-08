const http = require('http')

const server = http.createServer((req,res)=>{
  if(req.url === '/'){
      res.end("HOME")
  }else if(req.url === '/about'){
      res.end("about this shit")
  }else{
      res.end(`
      <h1>ERROR : No page found</h1>
      <a href='/'>back home</a>
      `)
  }
})

server.listen(5000);