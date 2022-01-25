const express = require("express");
const router = express.Router();
const Post = require("../models/postModel")
router.post("/post",async function(req,res){

try{
const makePost = await Post.create(req.body)
res.send(makePost)


}catch(err){


    console.log(err);

    console.log("Something Went Wrong in post POST")
}

})
router.get("/post",async function (req,res){
    const getPost = await Post.find();
    res.send(getPost)
})

router.get("/post/:id",async function(req,res){
    const getById = await Post.findById({_id:req.params.id}).lean().exec();
    res.send(getById)
})
router.patch("/post/:id",async function(req,res){
const updatePost = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
return res.send(updatePost)


})
module.exports = router;