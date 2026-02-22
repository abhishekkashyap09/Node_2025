const http = require('http');
const userData =[
    {
        name : "Manvi",
        age : 21,
        email : "manvi@example.com",
        password : "manvi123"
    },

    {
        name : "Sonam",
        age : 13,
        email : "sonam@example.com",
        password : "sonam123"
    },

    {
        name : "Rita",
        age : 21,
        email : "rita@example.com",
        password : "rita123"
    },


]
http.createServer((req, resp) => {
    resp.setHeader("Content-Type", "application/json");
    resp.write(JSON.stringify(userData));
    resp.end(); 
}).listen(5800);

console.log("Server running at http://localhost:5800");