const router = require("express").Router();
const Pin = require("../Models/Pins");
const verify = require("../verifyToken.js")

//CREATE A NEW PIN
router.post("/create",async (req,res)=>{
const newPin = new Pin(req.body);
try {
   const savedPin =await newPin.save();
   res.status(200).json(savedPin)
} catch (error) {
    res.status(500).json(err)
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

//GET PIN BY COMPANY
router.get("/getByID/:id",async (req,res)=>{
    const {id} = req.params
    console.log(id)
    try {
        const getPin =await Pin.find({CompanyId:id})
        res.status(200).json(getPin);
    } catch (error) {
        res.status(500).json(error)
    }




})


module.exports = router