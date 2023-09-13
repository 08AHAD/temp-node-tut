//HTTP MODULE
//core feature of node in action 
//We will use abstraction on top http module known as express
//client-request(req)
//res-> response we send.
//res.end() -> response end.

const http = require('http');
const server = http.createServer((req,res)=>{
if(req.url==='/'){
    res.end('Welcome to my first http request')
}
if(req.url==='/about'){
    res.end('Here is our short history')
}
res.end(`<h1>Oops<h1>
<p>We can't seem to find the page you are looking for</p>
<a href ="/">back home</a>
  `)
})

server.listen(5000)