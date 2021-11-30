const router = require("express").Router();
const Companies = require("../Models/Companies.js");
const verify = require("../verifyToken.js");

//CREATE A NEW COMPANY
router.post("/create",async (req,res)=>{
    const newCompany = new Companies(req.body);
    console.log(newCompany)
    try {
       const savedCompany =await newCompany.save();
       console.log(savedCompany)
       res.status(200).json(savedCompany)
    } catch (error) {
        console.log(error)
        res.status(500).json(err)
    }
    })

//GET COMPANY BY AUTHOR
router.get("/getByID/:author",async (req,res)=>{
    const {author} = req.params
    try {
        const getCompany =await Companies.find({Author: author});
        res.status(200).json(getCompany);
    } catch (error) {
        res.status(500).json(error)
    }

})

//GET COMPANY BY COMPANYNAME
router.get("/getByCompanyName/:companyName",async (req,res)=>{
    const {companyName} = req.params
    try {
        const getCompany =await Companies.find({CompanyName: companyName});
        res.status(200).json(getCompany);
    } catch (error) {
        res.status(500).json(error)
    }

})

//GET ALL COMPANIES
router.get("/",async (req,res)=>{
    try {
       const allCompanies =await Companies.find();
       console.log("selam")
       res.status(200).json(allCompanies)
    } catch (error) {
        res.status(500).json(err)
    }
    })

module.exports = router;