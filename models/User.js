 const mongoose = require("mongoose");

 const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    userpicture: { type: String },
    userdescription: { type: String },
    following: { type: [String] },
    orderOF: { type: [] },
    orderMS: { type: [] },
    subscribers: { type: [String] },
 });



module.exports = mongoose.model("User", userSchema);