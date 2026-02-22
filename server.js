const http = require('http');
http.createServer(
    (req, resp) => {
        resp.write("<h1>This is the server page </h1>");
        resp.end();
    }
).listen(3800);