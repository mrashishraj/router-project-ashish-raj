const mongoose = require("mongoose");
// const validator = require("validator")
const userSchema = new mongoose.Schema({
user_name:{type:String,required:true},
username_fullname:{type:String,required:true},
password:{type:String,required:true},

avatar:{type:String,}

})

const User = new mongoose.model("user",userSchema);
module.exports = User;