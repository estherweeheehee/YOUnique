const express = require("express");
const Products = require("../models/Products");

const router = express.Router();

router.post("/", async (req, res) => {
    res.send("success")
})

module.exports = router;