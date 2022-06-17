const mongoose = require("mongoose");

const feedSchema = mongoose.Schema({
    post: String,
    Image_url:String,
    date: Date
   
});

module.exports = mongoose.model("Feed", feedSchema);