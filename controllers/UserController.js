const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/", async (req, res) => {
    res.send("success")
})

module.exports = router;