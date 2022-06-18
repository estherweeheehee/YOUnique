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
    const feed = await Feed.find({userId: id})
    console.log(feed)
    res.send(feed)
  }catch(error){
      res.send(error)
  }
  });

  //? POST
router.post("/", async (req, res) => {
  try{
    const feed = await Feed.create(req.body)
    res.send(feed)
  }catch(error){
    res.send(error)
  }
  
});

//? Delete
router.delete("/:id", async (req,res)=>{
  try{
    const {id} = req.params
    const feed = await Feed.findByIdAndDelete(id)
    res.send(feed)
  }catch(error){
    res.send(error)
  }
})

 //? Update
router.put('/:id', async (req,res)=>{
  try{
    const {id} = req.params
    const feed = await Feed.findByIdAndUpdate(id, req.body, 
      {new: true})

    res.send(feed)
  }catch(error){
    res.send(error)
  }
})

module.exports = router;
