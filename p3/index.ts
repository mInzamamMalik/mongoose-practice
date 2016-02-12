import express = require("express");
import mongoose = require("mongoose");

let app = express();


app.set("port", 3000);


console.log(app.get("port"));


let dbURI = "mongodb://localhost:27017/myNewdb";
mongoose.connect(dbURI);

mongoose.connection.on("connected", () => {
    console.log("connected to db");
});
mongoose.connection.on("disconnected", () => {
    console.log("disconnected from db");
});
mongoose.connection.on("error", (err) => {
    console.log("connecting to db error: ", err);
});

process.on("SIGINT", () => {
    console.log("app is terminating, discounecting from db");
    mongoose.connection.close(() => {
        process.exit(0);
    });
});






let projectSchema = new mongoose.Schema({
    __id: mongoose.Schema.Types.ObjectId,



    projectName: { type: String, validator: { function() { }, "h"  }},



    createdOn: { type: Date, default: Date.now },
    modifiedOn: { type: String, default: Date.now },
    createdBy: { type: String },
    task: String

});

userSchema.path('name').validate(function(val) {


    if (val && val.length >= 5) {
        return true;
    }
    return false;
    
    
    
}, 'Too short');




userSchema.path('username').validate(function(value, respond) {



    User.find({ username: value }, function(err, users) {
        
        
        if (err) {
            console.log(err);
            return respond(false);
        }
        
        console.log('Number found: ' + users.length);
        
        
        if (users.length) {
            respond(false); // validation failed
            
        } else {
            respond(true); // validation passed
        }
    })






}, 'Duplicate username');


console.log(projectSchema.path("projectName").vali);







let projectModel = mongoose.model("projectModel", projectSchema);

var instance1 = new projectModel({
    projectName: "inzi",
    createdBy: "first",
    task: "a new task"
});


instance1.projectName = "dfsdf";

instance1.save();




// projectSchema.path('prjectName').validate( customfunc , 'length short' )
 
// projectSchema.path('projectName').validate(function(){
    
//   projectModel.find({name : "inzi"}, '')
    
    
// }, 'match found ')



// projectModel.find({projectName : "a project"})

// .sort('_id')
// .exec((err , data)=>{
//     if(!err){
//         console.log(data);
//     }
    
//     console.log(err);
// });




// projectModel.create({
//     projectName : "a project",
//     createdBy : "first",
//     task : "a task"
// });

projectModel.findOne(
    { projectName: "inzi" },
    null,


    function(err, user) {
        if (user) {
            console.log(user, "user");
            return
        }
        console.log(err, "error");
    })
        
      

// projectModel.findOne({'createdBy' : 'first'}, "createdBy"   , function(err,user) {
//     if(!err){
//          console.log("data found" ,user);
//     }else{
//         console.log(err);
//     }
// });




// projectModel.find({} , function(err,user) {
//     if(!err){
//          console.log("data found" ,user);
//     }else{
//         console.log(err);
//     }
// });

app.listen(3000, () => {
    console.log("listening on 3000");
});