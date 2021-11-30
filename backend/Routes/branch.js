const router = require("express").Router();
const Branch = require("../Models/Branch.js");
const verify = require("../verifyToken.js");


router.post("/create", async (req, res) => {
    const newBranch = new Branch(req.body);
    console.log(newBranch);
    try {
        const savedBranch = await newBranch.save();
        res.status(200).json(savedBranch);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;