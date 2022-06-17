const mongoose = require("mongoose");

const feedSchema = mongoose.Schema({
   
});

const feedDB = mongoose.connection.useDb('Feed');

const Feed = feedDB.model('Feed', feedSchema);

module.exports = Feed