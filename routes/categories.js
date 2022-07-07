const router = require("express").Router();
const Category = require("../models/Category");

//Create Category
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCategory = await newCat.save();
    res.status(200).json(savedCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get categories
router.get("/", async (req, res) => {
  try {
    const cats = await Category.find();
    res.status(200).json(cats);
  } catch (error) {
    res.status(500).json("No categories Found");
  }
});
module.exports = router;
