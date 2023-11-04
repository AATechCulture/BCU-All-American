const express = require("express") ;
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users")

mongoose.connect("mongodb+srv://flightDB:allamerican@cluster0.8qri3sr.mongodb.net/flightDB?retryWrites=true&w=majority");

// app.use(express.json());


// Handling GET / request 
app.get("/", (req, res, next) => { 
	res.send("This is the express server by Mulenga") 
}) 

app.get("/getUsers", (req, res)=>{
	UserModel.find({}).then(function(users) {
		res.json(users)
	}).catch(function(err) {
		res.json(err)
	})
})

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