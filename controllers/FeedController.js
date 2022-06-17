const express = require("express");
const Feed = require("../models/Feed");

const router = express.Router();

//? GET
router.get("/", async (req, res) => {
  try {
    const feed = await Feed.find();
    res.send(feed);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try{
    const {id} = req.params
    const feed = await Feed.findById(id)
    res.send(feed)
  }catch(error){
      res.send(error)
  }
  });

  //? POST
router.post("/", async (req, res) => {
  res.send("success");
});

module.exports = router;
