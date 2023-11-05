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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Desk'
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