const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userCartSchema = new Schema({
    username : {
        type : String,
        required : true,
    },
    productImage : {
        type : String,
        required : true
    },
    productName : {
        type : String,
        required : true
    },
    productType : {
        type : String,
        required : true
    },
    productBrandName : {
        type : String,
        required : true
    },
    productBrandCode : {
        type : String,
        required : true
    },
    productRating : {
        type : String,
        required : true
    },
    productActualPrice : {
        type : String,
        required : true
    },
    productPrice : {
        type : String,
        required : true
    },
    productColor : {
        type : String,
        required : true
    },
    productSize : {
        type : String,
        required : true
    },
    productQuantity : {
        type : String,
        required : true
    },
    productSizeName : {
        type : String,
        required : true
    }
})

const UserCart = mongoose.model('WarehouseUserCart',userCartSchema)
module.exports = UserCart;