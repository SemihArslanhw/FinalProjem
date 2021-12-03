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
    },
    BranchImage:{
        type:String,
    }
},
   
{ timestamps:true }
)

module.exports = mongoose.model("Branches" , BranchSchema)