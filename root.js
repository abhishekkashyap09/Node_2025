const http = require('http');
const userForm = require('./userForm');
const userData = require('./userData');

http.createServer((req, resp)=>{
    resp.writeHead(200,{'content-type':"text/html"});

if(req.url == "/"){
   userForm(req, resp);
}else if(req.url == "/submit"){
    userData(req, resp);
}
resp.end();
}).listen(9000)
console.log("Server running at http://localhost:9000");