 const mongoose = require("mongoose");

 const usersSchema = mongoose.Schema({
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

 const usersDB = mongoose.connection.useDb('Users');

 const Users = usersDB.model('Users', usersSchema);

 module.exports = Users