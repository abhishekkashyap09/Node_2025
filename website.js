const http = require('http');
const fs = require('fs');
const { error } = require('console');

http.createServer((req, resp) => {

    // 
    let collectHeaderData = fs.readFileSync("html/Header.html", "utf-8");
   
    // 
    let file = "/Home";
    if(req.url !='/'){
      file = req.url;
    }

    if(req.url!="/style.css"){
         fs.readFile("html"+file+".html", "utf-8", (err, data) => {
        if (err) {
            resp.writeHead(404, { 'content-type': "text/html" });
            resp.end("<h1>Internal Server Error</h1>");
            return;
        }
        resp.writeHead(200, { 'content-type': "text/html" });
        resp.write(collectHeaderData+""+data);
        resp.end();
    });
    }else if(req.url=="/style.css"){
        fs.readFile("html/style.css", "utf-8", (err, data) => {
        if (err) {
            resp.writeHead(404, { 'content-type': "text/plain" });
            resp.end("<h1>css file not found</h1>");
            return false;
        }
        resp.writeHead(200, { 'content-type': "text/css" });
      
        resp.end(data);
    });
      return;

    }
   
}
).listen(4900);
