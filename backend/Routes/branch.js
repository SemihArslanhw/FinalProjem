const router = require("express").Router();
const Branch = require("../Models/Branch.js");
const verify = require("../verifyToken.js");


router.post("/create", async (req, res) => {
    console.log(req.body);
    const newBranch = new Branch(req.body);   
    try {
        const savedBranch = await newBranch.save();
        console.log(savedBranch);
        res.status(200).json(savedBranch);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//GET BRANCH BY BRANCHNAME
router.get("/getBranch/:branchName", async (req, res) => {
    try {
        const branch = await Branch.findOne({ BranchName: req.params.branchName });
        res.status(200).json(branch);
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