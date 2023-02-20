import mongoose from "mongoose";
const mail = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    hash_code:{
        type:String,
        required:true
    },
    exp_time:{
        type:Number,
    },
    create_time:{
        type:Date,
        default:Date.now

    },
})
const modle = new  mongoose.model('otp',mail) 
export default modle;