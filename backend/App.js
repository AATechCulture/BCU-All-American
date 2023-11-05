const express = require("express") ;
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const User = require("./models/Users.js")
const Desk = require('./models/Desk.js');


const mongoURI = "mongodb+srv://flightDB:allamerican@cluster0.8qri3sr.mongodb.net/flightDB?retryWrites=true&w=majority";  // replace with your connection string
mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use(express.json());
app.use(cors())

app.options('*', cors());

app.get('/getUsers', async (req, res) => {
	try {
	  // Retrieve all users from the database
	  const users = await User.find({});
	  
	  // Send the list of users as a response
	  res.status(200).json(users);
	} catch (error) {
	  // Handle any errors that might occur
	  res.status(500).json({ message: error.message });
	}
});

app.get('/getUsersInQueue', async (req, res) => {
    try {
        // Get the users sorted by their creation time
        let users = await User.find({}).sort('createdAt')

        // Assign a queue number based on the array index
        users = users.map((user, index) => {
            return {
                ...user.toObject(), // Convert the Mongoose document to a plain object
                queueNumber: index + 1  // Add 1 because array indices start at 0
            };
        });

        // Send the list of users with their queue numbers
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.post("/createUser", async (req, res) => {
	try {
	  // Find the desk using the provided ID

  
	  // Instantiate a new User with details from the request body
	  const newUser = new User({
		Name: req.body.Name,
		FlightNumber: req.body.FlightNumber,
		// DeskNumber is replaced by the reference to the desk object
		Desk: req.body.Desk, // Assign the desk reference here
		ConcernDescription: req.body.ConcernDescription,
	  });
  
	  // Save the new user to the database and wait for the operation to complete
	  const savedUser = await newUser.save();
  

	  // Respond with the saved user data, including the populated desk information
	  res.status(201).json(savedUser);
	} catch (err) {
	  // Catch any errors that occur during save and send an error response
	  res.status(400).json({ message: err.message });
	}
});

app.delete('/deleteUser/:userId', async (req, res) => {
	try {
	  // Find the user by ID and get the associated desk
	  const user = await User.findById(req.params.userId);
	  if (!user) {
		return res.status(404).json({ message: "User not found" });
	  }
  

  
	  const deletedUser = await User.findByIdAndDelete(user);
  
	  // Send back the deleted user
	  res.status(200).json(deletedUser);
	} catch (error) {
	  res.status(500).json({ message: error.message });
	}
});

app.delete('/deleteDesk/:deskId', async (req, res) => {
    try {
        const deskId = req.params.deskId;
        const deletedDesk = await Desk.findByIdAndRemove(deskId);

        if (!deletedDesk) {
            return res.status(404).json({ message: "Desk not found" });
        }
        await User.deleteMany({ desk: deskId });

        res.status(200).json({ message: "Desk deleted successfully", deletedDesk });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


  

app.get('/getAllDesks', async (req, res) => {
	try {
	  // Retrieve all desks from the database
	  const desks = await Desk.find({});
	  // Send the list of desks as a response
	  res.status(200).json(desks);
	} catch (error) {
	  // Handle any errors that might occur
	  res.status(500).json({ message: error.message });
	}
});
  

// Server setup 

const PORT = 8080;

app.listen(PORT, () => { 
	console.log(`Server running on port ${PORT}`) 
}) 

