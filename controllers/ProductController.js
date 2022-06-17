const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.post("/", async (req, res) => {
    res.send("success")
})

module.exports = router;