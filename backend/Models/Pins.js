const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema({
    CompanyId: {
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true,
    },
    location:{
    type:String,
    require:true,
    min:3
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