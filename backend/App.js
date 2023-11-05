const express = require("express") ;
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const User = require("./models/Users.js")
const Desk = require('./models/Desk.js');


const mongoURI = "mongodb+srv://flightDB:allamerican@cluster0.8qri3sr.mongodb.net/flightDB?retryWrites=true&w=majority";  // replace with your connection string
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use(express.json());



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

app.post('/createDesk', async (req, res) => {
	try {
	  // Create a new Desk instance with data from the request body
	  const newDesk = new Desk({
		airport: req.body.airport,
		deskNumber: req.body.deskNumber,
		// Add other fields here if your Desk schema includes more
	  });
  
	  // Save the new desk to the database
	  const savedDesk = await newDesk.save();
  
	  // Respond with the saved desk data
	  res.status(201).json(savedDesk);
	} catch (err) {
	  // Handle any errors
	  res.status(400).json({ message: err.message });
	}
});

app.post("/createUser", async (req, res) => {
	try {
	  // Find the desk using the provided ID
	  const desk = await Desk.findById(req.body.Desk);
	  if (!desk) {
		return res.status(404).json({ message: "Desk not found" });
	  }
  
	  // Instantiate a new User with details from the request body
	  const newUser = new User({
		Name: req.body.Name,
		FlightNumber: req.body.FlightNumber,
		// DeskNumber is replaced by the reference to the desk object
		Desk: desk._id, // Assign the desk reference here
		ConcernDescription: req.body.ConcernDescription,
	  });
  
	  // Save the new user to the database and wait for the operation to complete
	  const savedUser = await newUser.save();
  
	  // Populate the desk field in the savedUser to return the complete desk object
	  await savedUser.populate('Desk');
  
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
	  const user = await User.findById(req.params.userId).populate('Desk');
	  if (!user) {
		return res.status(404).json({ message: "User not found" });
	  }
  
	  // Store the desk ID before deleting the user
	  const deskId = user.Desk._id;
  
	  const deletedUser = await User.findByIdAndDelete(user);
  
	  // Fetch the updated list of users at the desk, sorted by their creation time
	  const updatedQueue = await User.find({ Desk: deskId }).sort('createdAt');
  
	  // Assign queue numbers to each user in the updated queue
	  const queueWithNumbers = updatedQueue.map((user, index) => ({
		...user.toObject(), // Convert the Mongoose document to a plain object
		queueNumber: index + 1, // Add 1 to index to start queue numbers at 1
	  }));
  
	  // Send back the updated queue
	  res.status(200).json(queueWithNumbers);
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



app.get('/usersByDesk/:deskId', async (req, res) => {
    try {
        const deskId = req.params.deskId;
        
        // Validate the deskId, it should be a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(deskId)) {
            return res.status(400).json({ message: "Invalid desk ID." });
        }

        // Find the desk by its ID
        const desk = await Desk.findById(deskId);
        if (!desk) {
            return res.status(404).json({ message: "Desk not found" });
        }

        // Get the users sorted by their creation time
        let users = await User.find({ Desk: desk._id }).sort('createdAt').populate('Desk');

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

