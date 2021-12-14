const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    BranchId: {
        type:String,
        required:true
    },
    ProductName: {
        type: String,
        required: true
    },
    Category:{
        type: String,
        required: true
    },
    ProductImage: {
        type: String,
        required: true
    },
    ProductDescription: {
        type: String,
        required: true
    },
    ProductStockSituation:{
        type: String,
        required: true,
        min: 3,
        max:3
    },
    
    


},{ timestamps:true });

module.exports = mongoose.model("Product", ProductSchema);