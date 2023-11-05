const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    FlightNumber: {
        type: String,
        required: true
    },
    Desk: {
        type: String,
        required: true,
    },
    ConcernDescription: {
        type: String,
        required: false
    },
}, {
    timestamps: true
})

const User = mongoose.model("User", UserSchema)
module.exports = User;