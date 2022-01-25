const express  = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const connection  = ()=>{
    mongoose.connect(`mongodb+srv://ashishraj1:${process.env.PASSWORD}@cluster0.m11hd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
}).then(()=>{
    console.log("Connection Established on Database")
}).catch((err)=>{
console.log(err);
console.log("Something went Wrong in Mongo connection!")
})
}
const userController=require("./controllers/userController")
const postController = require("./controllers/postController")
app.use("/",userController)
app.use("/",postController)
app.listen("8000",async function(){
    await connection()
    console.log("Connected succesfully on 8000")
})