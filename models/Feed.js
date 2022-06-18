const mongoose = require("mongoose");

const feedSchema = mongoose.Schema({
    post: String,
    Image_url:String,
    date: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    userId: String
});

module.exports = mongoose.model("Feed", feedSchema);