const mongoose = require("mongoose");

const CompaniesSchema = new mongoose.Schema({
    Author:{
        type:String,
        required:true,
    },
    CompanyName:{
        type:String,
        required:true,
        unique:true,
    },
    Description:{
        type:String,
        required:true,
    },
    Address:{
        type:String,
        required:true,
    },
    Phone:{
        type:Number,
        required:true,
        unique:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    Companyimage:{
        type:String,
        trim:true,
        required:true,
    },
    BackTopİmage:{
        type:String,
        trim:true,
        required:true,
    }
    
    
   
},
{ timestamps:true }
)

module.exports = mongoose.model("Companies" , CompaniesSchema)