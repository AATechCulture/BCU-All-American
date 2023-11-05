const mongoose = require("mongoose");

// Define a schema for the Desk
const deskSchema = new mongoose.Schema({
    airport: {
      type: String,
      required: true
    },
    deskNumber: {
      type: Number,
      required: true,
      unique: true
    },
  });
  
  // Create a model from the schema
  const Desk = mongoose.model('Desk', deskSchema);
  
  module.exports = Desk;