const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    flightNumber: String,
    name: String,
    concernDescription: String
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;