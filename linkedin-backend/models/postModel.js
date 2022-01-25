const mongoose = require("mongoose");

const User = require("../controllers/userController")
const postSchema = new mongoose.Schema({


    author_name:{type:String,required:true},
    author_username:{type:String,required:true},
    author_title:{type:String,required:true,},
    author_avatar:{type:String,required:true},
    body:{type:String,required:true},
    comments:[{
    id:{type:mongoose.Schema.Types.ObjectId,ref:User},
        comment_body:{type:String,},comment_author:{type:String}}],

        likes:[{user_id:{type:mongoose.Schema.Types.ObjectId,ref:User},username:{type:String}}]
})
const Post = new mongoose.model("post",postSchema);
module.exports= Post;