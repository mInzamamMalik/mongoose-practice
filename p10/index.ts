import express = require("express");
import mongoose = require("mongoose");



mongoose.connect("mongodb://localhost/mydb");

let userSchema = new mongoose.Schema({    
    companyName : String,
    email : String,
    // createdBy : { type: mongoose.Schema.Types.ObjectId , ref : 'User' }        
});
let userModel = mongoose.model("users",userSchema);



let salesmanSchema = new mongoose.Schema({
    name : String,
    createdBy : { type: mongoose.Schema.Types.ObjectId , ref : 'User' }
});
let salesmanModel = mongoose.model("salesmans",salesmanSchema);



let orderSchema = new mongoose.Schema({
    orderDescription : String,
    createdBy : { type: mongoose.Schema.Types.ObjectId , ref : 'salesmanSchema' }
});
let orderModel = mongoose.model("orders",orderSchema);









let app = express();


app.use((req,res,next)=>{
    next();
});

app.listen(3000,()=>{
    console.log("listening on 3000");
});