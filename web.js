const http = require('http');
const fs = require('fs');

http.createServer((req, resp)=>{

fs.readFile('html/web.html', 'utf-8',(err, data)=>{
    if(err){
        resp.writeHead(200,{'content-type':"text/plain"});
        resp.write("Error reading file"); 
        return
        resp.end();
    }else{
        resp.writeHead(200,{'content-type':"text/html"});
        resp.write(data);
        resp.end();
    }
})

}).listen(6700)
console.log("Server running at http://localhost:6700");