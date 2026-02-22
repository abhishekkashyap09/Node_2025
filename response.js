const http = require('http');

http.createServer((req, resp) => {

    resp.setHeader("Content-Type", "text/html");

    resp.write(`

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sliding Login Signup</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Segoe UI',sans-serif;
}

body{
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(135deg,#5f2c82,#49a09d);
overflow:hidden;
}

.container{
width:400px;
height:500px;
background:white;
border-radius:15px;
box-shadow:0 20px 40px rgba(0,0,0,0.2);
overflow:hidden;
position:relative;
}

/* form wrapper */
.form-wrapper{
display:flex;
width:800px;
height:100%;
transition:0.6s;
}

/* forms */
.form{
width:400px;
padding:40px;
display:flex;
flex-direction:column;
justify-content:center;
}

.form h2{
color:#5f2c82;
margin-bottom:20px;
text-align:center;
}

.form input{
padding:12px;
margin:10px 0;
border-radius:8px;
border:1px solid #ccc;
outline:none;
}

.form button{
margin-top:15px;
padding:12px;
border:none;
border-radius:25px;
background:#5f2c82;
color:white;
cursor:pointer;
transition:0.3s;
}

.form button:hover{
background:#49a09d;
transform:scale(1.05);
}

.switch{
margin-top:15px;
text-align:center;
color:#5f2c82;
cursor:pointer;
}

.switch:hover{
text-decoration:underline;
}

.forget{
text-align:right;
font-size:14px;
color:#5f2c82;
cursor:pointer;
margin-top:5px;
}

.forget:hover{
text-decoration:underline;
}

.container.active .form-wrapper{
transform:translateX(-400px);
}

</style>

</head>

<body>

<div class="container" id="container">

<div class="form-wrapper">

<!-- Login Form -->
<div class="form">

<h2>Login</h2>

<input type="email" placeholder="Email">

<input type="password" placeholder="Password">

<div class="forget">Forgot Password?</div>

<button>Login</button>

<div class="switch" onclick="showSignup()">
Don't have account? Signup
</div>

</div>

<!-- Signup Form -->
<div class="form">

<h2>Signup</h2>

<input type="text" placeholder="Full Name">

<input type="email" placeholder="Email">

<input type="password" placeholder="Password">

<input type="password" placeholder="Confirm Password">

<button>Signup</button>

<div class="switch" onclick="showLogin()">
Already have account? Login
</div>

</div>

</div>

</div>

<script>

function showSignup(){
document.getElementById("container").classList.add("active");
}

function showLogin(){
document.getElementById("container").classList.remove("active");
}

</script>

</body>
</html>

`);

    resp.end();

}).listen(5600);

console.log("Server running at http://localhost:5600");