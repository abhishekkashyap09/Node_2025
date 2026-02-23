const { log } = require("console");
const http = require("http");
const querystring = require("querystring"); 

http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-type':"text/html"});
    console.log(req.url);

    if(req.url =="/"){
      resp.write(`
        <form action ="/submit" method="post">
           <input type="text" name="name" placeholder = "Enter your name"/>
           <input type="email" name="email" placeholder = "Enter your email"/>
           <input type = "Submit" value = "Submit Form"/>
        </form>
        `);
    }else if(req.url == "/submit"){
        let dataBody = [];
        req.on('data',(chunk)=>{
            dataBody.push(chunk);
        })
        req.on('end',()=>{
            let rawData = Buffer.concat(dataBody).toString();
            let readableData = querystring.parse(rawData);
            console.log(readableData);
        })
        resp.write('<h1>Data Submitted Successfully</h1>');

    }

    resp.end()
}).listen(5400);