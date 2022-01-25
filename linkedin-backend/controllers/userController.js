const express = require("express");
const router = express.Router();
const mongoose =require("mongoose")
const User = require("../models/userModel");
router.post("/register",async function(req,res){
try{
const addUser = await User.create(req.body);
res.send(addUser)


}catch(err){

console.log(err);
console.log("Something went wrong in Register Post request")

}


})

router.get("/users",async function (req,res){
const getUsers = await User.find().lean().exec();
res.send(getUsers);


})
router.get("/users/:id",async function(req,res){
    try{

    const userById = await User.findOne({_id:req.params.id}).lean().exec();
    res.send(userById)
}
catch(err){
    console.log(err)
    console.log("Error in get by id")
}
})
module.exports = router;