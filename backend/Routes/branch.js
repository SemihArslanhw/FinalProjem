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

//GET BRANCH BY COMPANY ID
 router.get("/getByCompanyID/:id",async(req,res)=>{
   const {id} = req.params
   try {
    const gettedBranches = await  Branch.find({CompanyId:id})
    res.status(200).json(gettedBranches)
   } catch (error) {
       console.log(error)
       res.status(500).json(error)
   }
   
   

 })

module.exports = router;