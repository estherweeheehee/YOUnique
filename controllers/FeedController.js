const express = require("express");
const Feed = require("../models/Feed");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const feed = await Feed.find();
    res.send(feed);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
    try {
        const {id} = req.params
      const feed = await Feed.FindById(id);
      res.send(feed);
    } catch (error) {
      res.send(error);
    }
  });

router.post("/", async (req, res) => {
  res.send("success");
});

module.exports = router;
