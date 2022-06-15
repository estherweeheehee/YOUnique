 const mongoose = require("mongoose");

 const usersSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true }

 })

 module.exports = mongoose.model("Users", usersSchema)