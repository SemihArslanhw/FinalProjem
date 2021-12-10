const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema({
    BranchName: {
        type:String,
        require:true,
        unique:true,
    },

    
    lat:{
        type:Number,
        require:true,

    },
    long:{
        type:Number,
        require:true,
    }
},
{ timestamps:true }
)

module.exports = mongoose.model("Pin" , PinSchema)