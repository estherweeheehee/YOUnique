const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Create Route
router.post("/", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.send(product)
      } catch (error) {
        console.log(error);
      }
})

// Read Route
router.get("/", async (req, res) => {
    try {
        const product = await Product.find()
        res.send(product)
    } catch (error) {
        console.log(error)
    }
  });
  
// Read Route - by userid
router.get("/user/:userid", async (req, res) => {
  const { userid } = req.params;
  try {
      const product = await Product.find({userid:userid})
      res.send(product)
  } catch (error) {
      console.log(error)
  }
});

// Read Route - by productid
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
      const product = await Product.find({_id: id})
      res.send(product)
  } catch (error) {
      console.log(error)
  }
});

// Read Route - by category and limit the results
router.get("/category/:id", async (req, res) => {
  const { id } = req.params;
  try {
      const product = await Product.find({product_category: id}).limit(4)
      res.send(product)
  } catch (error) {
      console.log(error)
  }
});

// Update Route
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const updateProduct = await Product.findByIdAndUpdate(id, req.body, {new: true});
      res.send(updateProduct);
    } catch (error) {
      res.send(error);
    }
  });

// Delete Route
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deleteProduct = await Product.findByIdAndRemove(id);
      res.send(deleteProduct);
    } catch (error) {
      res.send(error);
    }
  })

module.exports = router;