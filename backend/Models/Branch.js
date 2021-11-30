const mongoose = require("mongoose");

const BranchSchema = new mongoose.Schema({
    CompanyId: {
        type:String,
        require:true,
        min:3,
        max:20,
        
    }, 
    BranchName:{
        type:String,
        unique:true,
        require:true,
        min:3,
        max:20,
    },
    BranchAddress:{
        type:String,
        require:true,
        
    },
    BranchAddressCity:{
        type:String,
        require:true,

    },
    BranchAddressdistrict:{
        type:String,
        require:true,
    },
    BranchPhone:{
        type:Number,
        unique:true,
        require:true,
    }
},
   
{ timestamps:true }
)

module.exports = mongoose.model("Branches" , BranchSchema)