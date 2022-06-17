 const mongoose = require("mongoose");

 const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    display_pic_url: { type: String },
    user_description: { type: String },
    following_list: { type: [String] },
    sales_order_one_off: { type: [] },
    sales_order_subscription: { type: [] },
    subscriber_list: { type: [String] },
    seller_ratings: { type: [] }
 });



module.exports = mongoose.model("User", userSchema);