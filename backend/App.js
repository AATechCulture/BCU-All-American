const express = require("express") ;
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Handling GET / request 
app.get("/", (req, res, next) => { 
	res.send("This is the express server by Mulenga") 
}) 

// Handling GET /hello request 
app.get("/hello", (req, res, next) => { 
	res.send("This is the hello response"); 
}) 

app.get("/about", (req, res)=>{
    res.send("This is the about page")
})
// Server setup 
app.listen(8080, () => { 
	console.log("Server is Running") 
}) 