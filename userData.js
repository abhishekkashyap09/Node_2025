const querystring = require("querystring"); 

function userData(req, resp) {
     let dataBody = [];
        req.on('data',(chunk)=>{
            dataBody.push(chunk);
        })
     req.on('end',()=>{
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = querystring.parse(rawData);
                console.log(readableData);
            })
    resp.write(`
           <h1>You Can Get Data From User</h1>
        `); 
}
module.exports = userData;