const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userInfoShema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const UserInfo = mongoose.model('WarehouseUserInfo',userInfoShema)
module.exports = UserInfo;