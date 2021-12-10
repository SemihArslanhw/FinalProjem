const mongoose = require("mongoose");

const BranchSchema = new mongoose.Schema({
    CompanyId: {
        type:String,
        require:true,
                
    }, 
    BranchName:{
        type:String,
        require:true,

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
    BranchGoogleMaps:{
        type:String,
        require:true,
    },
    BranchImage:{
        type:String,
        require:true,
    }
},
   
{ timestamps:true }
)

module.exports = mongoose.model("Branches" , BranchSchema)