const express = require("express");
const Feed = require("../models/Feed");

const router = express.Router();

router.post("/", async (req, res) => {
    res.send("success")
})

module.exports = router;