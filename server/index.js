const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const usermodel = require("./Models/user");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/insurance").then(()=>{
    console.log("Databsse connected successfully");
}).catch(()=>{
    console.log("connection failed");
})

app.post("/createusers",async(req,res)=>{
   const cre = await usermodel.create(req.body);
   
   res.status(200).json({
    success:true,
    cre
   })
})


app.listen("3000",()=>{
    console.log("The server is working at : http://localhost:3000");
})