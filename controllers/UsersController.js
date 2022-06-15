const express = require("express");
const Users = require("../models/Users");

const router = express.Router();

router.post("/", async (req, res) => {
    res.send("success")
})

module.exports = router;