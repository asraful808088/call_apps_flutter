import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name:{
        type:String,
        default:null
    },
    
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:null
    },
    active_status:{
        type:Boolean,
        required:true
    },
    role:{
        type:"String",
        enum:["admin","user"],
        default:"user"
    },
    update_time:{
        type:Date,
    },
    create_time:{
        type:Date,
        default:Date.now

    },
})
const modle = new  mongoose.model('user',userSchema) 
export default modle;