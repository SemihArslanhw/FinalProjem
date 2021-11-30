const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema({
    BranchId: {
        type:String,
        require:true,
        min:3,
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