const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
   
});

const productsDB = mongoose.connection.useDb('Products');

const Products = productsDB.model('Products', productsSchema);

module.exports = Products