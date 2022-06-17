const mongoose = require("mongoose");

const feedSchema = mongoose.Schema({
    post: String,
    Image_url:String,
    date: Date
   
});

const feedDB = mongoose.connection.useDb('Feed');

const Feed = feedDB.model('Feed', feedSchema);

module.exports = Feed