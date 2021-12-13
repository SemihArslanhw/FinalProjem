const router = require("express").Router();
const Company = require("../Models/Companies.js");
const verify = require("../verifyToken.js");
const Branch = require("../Models/Branch.js");
const Product = require("../Models/Product.js");

//CREATE A NEW PRODUCT
router.post("/create", verify, async (req, res) => {
 const newProduct = req.body;
 try {
    const savedPin =await newProduct.save();
    res.status(200).json(savedPin);
 } catch (error) {
     console.log(error)
     res.status(500).json(error)
 }
})

module.exports = router;