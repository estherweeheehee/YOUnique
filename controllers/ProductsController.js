const express = require("express");
const Products = require("../models/products");

const router = express.Router();

router.post("/", async (req, res) => {
    res.send("success")
})

module.exports = router;