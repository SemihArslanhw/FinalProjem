const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    BranchId: {
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

    },
    ProductQuantity:{
        type: Number,
        required: true
        
    }


});

exports.Product = mongoose.model("Product", ProductSchema);