function userForm(req, resp) {
    
    resp.write(`
           <form action ="/submit" method="post">
           <input type="text" name="name" placeholder = "Enter your name"/>
           <input type="email" name="email" placeholder = "Enter your email"/>
           <input type = "Submit" value = "Submit Form"/>
         </form>
        `); 
}
module.exports = userForm;