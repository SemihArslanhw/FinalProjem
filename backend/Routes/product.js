const router = require("express").Router();
const Company = require("../Models/Companies.js");
const verify = require("../verifyToken.js");
const Branch = require("../Models/Branch.js");
const Product = require("../Models/Product.js");

//CREATE A NEW PRODUCT
router.post("/create", async (req, res) => {
 const newProduct = new Product(req.body);
 try {
    const savedPin =await newProduct.save();
    res.status(200).json(savedPin);
 } catch (error) {
     console.log(error)
     res.status(500).json(error)
 }
})

//GET PRODUCTS BY BRANCH ID
router.get("/get/:id", async (req, res) => {
    console.log(req.params.id)
    try {
        const products = await Product.find({BranchId: req.params.id});
        console.log(products)
        res.status(200).json(products);
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})
//GET PRODUCT BY ID
router.get("/getByProductId/:id", async (req, res) => {
    console.log(req.params.id)
    try {
        const product = await Product.findById(req.params.id);
        console.log(product)
        res.status(200).json(product);
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

module.exports = router;