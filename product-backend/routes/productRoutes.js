const express = require("express");
const router = express.Router();
const Product = require("../model/Product");

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Server error: " + err.message });
  }
});
// POST add product
router.post("/", async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const newProduct = new Product({ name, price, description, category });
    await newProduct.save();
    res.json(newProduct);
  } catch (err) {
    res.status(400).json({ error: "Invalid product data" });
  }
});

// DELETE product
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(404).json({ error: "Product not found" });
  }
});

module.exports = router;