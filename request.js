const http  = require('http');
http.createServer((req, resp) =>{
    
    console.log(req.method);

    if(req.url == "/home")
        resp.write("<h1>This is the home page</h1>");
    else if(req.url == "/about")
        resp.write("<h1>This is the about page</h1>");
    else if(req.url == "/contact")
        resp.write("<h1>This is the contact page</h1>");
    else
        resp.write("<h1>Page not found</h1>");
  
    resp.end();
}).listen(7800);

console.log("Server running at http://localhost:7800");