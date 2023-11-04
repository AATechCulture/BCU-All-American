const express = require("express") ;
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Handling GET / request 
app.get("/", (req, res, next) => { 
	res.send("This is the express server by Mulenga") 
}) 

// Handling GET /hello request 
app.get("/virtual-queue", (req, res, next) => { 
	res.send("This is the virtual queue page"); 
}) 

app.get("/safety-game", (req, res)=>{
    res.send("This is the safety game page")
})

app.get("/destination-explore", (req, res) => {
	res.send("This is the destination explore page")
})
// Server setup 
app.listen(8080, () => { 
	console.log("Server is Running") 
}) 