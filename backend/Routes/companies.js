const router = require("express").Router();
const Companies = require("../Models/Companies.js");
const verify = require("../verifyToken.js");
const Branch = require("../Models/Branch.js");

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

//GET COMPANY BY COMPANYID
router.get("/getByCompanyID/:companyID",async (req,res)=>{
    const {companyID} = req.params
    try {
        const getCompany =await Companies.find({_id: companyID});
        res.status(200).json(getCompany);
    } catch (error) {
        res.status(500).json(error)
    }

}
)

//GET COMPANYNAME BY COMPANYID
router.get("/getCompanyNameByCompanyID/:companyID",async (req,res)=>{
    const {companyID} = req.params
    try {
        const getCompany =await Companies.find({_id: companyID},{CompanyName:1});
        res.status(200).json(getCompany);
    } catch (error) {
        res.status(500).json(error)
    }

}
)

//GET COMPANYNAME BY BRANCHNAME 
router.get("/getCompanyNameByBranchName/:branchName",async (req,res)=>{
    const {branchName} = req.params
    console.log(branchName)
    try {
        const getBranch =await Branch.find({BranchName: branchName});
        const getCompany =await Companies.find({_id: getBranch[0].CompanyId});
        console.log(getCompany)
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