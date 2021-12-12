const router = require("express").Router();
const Pin = require("../Models/Pins.js");
const Company = require("../Models/Companies.js");
const verify = require("../verifyToken.js");
const Branch = require("../Models/Branch.js");

//CREATE A NEW PIN
router.post("/create",async (req,res)=>{
const newPin = new Pin(req.body);
try {
   const savedPin =await newPin.save();
   res.status(200).json(savedPin)
} catch (error) {
    console.log(error)
    res.status(500).json(error)
}
})

//GET ALL PİN
router.get("/" , async (req,res)=>{
try {
    const AllPins = await Pin.find();
    res.status(200).json(AllPins.reverse());
} catch (error) {
    res.status(500).json(error);
}
})

//GET PIN BY BRANCH
router.get("/getByID/:id",async (req,res)=>{
    const {id} = req.params
    console.log(id)
    const getPin = [];
    try {
        const getPinAll =await Pin.find({BranchName:id})
        getPin.push(getPinAll);
        res.status(200).json(getPin);
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET PIN BY COMPANY
router.get("/getByCompany/:id",async (req,res)=>{
    const {id} = req.params
    const getPin = [];
    try {
        const getBranch =await Branch.find({CompanyId:id})
        for (let i = 0; i < getBranch.length; i++) {
            const getPinByBranch = await Pin.find({BranchName:getBranch[i].BranchName})
            getPin.push(getPinByBranch)
        }
        res.status(200).json(getPin);
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router