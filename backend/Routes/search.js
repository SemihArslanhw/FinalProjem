const router = require("express").Router();
const Company = require("../Models/Companies.js");
const verify = require("../verifyToken.js");
const Branch = require("../Models/Branch.js");

//Search for a branch
router.get("/:params",  async (req, res) => {
    const { params } = req.params;
    console.log(params);
    const branch = [];
    try {
        const branches = await Branch.find({
        
             BranchName:{$regex:params,$options:"i"} 
            
        
})


for(let i=0;i<branches.length;i++){
    const CompanyName = await Company.find({_id:branches[i].CompanyId},{CompanyName:1,_id:0})
    branch[i] = {
        CompanyName:CompanyName[0].CompanyName, 
        BranchName:branches[i].BranchName,
        BranchId:branches[i]._id,
        BranchAddressCity:branches[i].BranchAddressCity,
        BranchAddressdistrict:branches[i].BranchAddressdistrict,
        BranchImage:branches[i].BranchImage,
    }
}

console.log(branch);
res.status(200).json(branch);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

});

module.exports = router;