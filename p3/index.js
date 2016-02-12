var express = require("express");
var mongoose = require("mongoose");
var app = express();
app.set("port", 3000);
console.log(app.get("port"));
var dbURI = "mongodb://localhost:27017/myNewdb";
mongoose.connect(dbURI);
mongoose.connection.on("connected", function () {
    console.log("connected to db");
});
mongoose.connection.on("disconnected", function () {
    console.log("disconnected from db");
});
mongoose.connection.on("error", function (err) {
    console.log("connecting to db error: ", err);
});
process.on("SIGINT", function () {
    console.log("app is terminating, discounecting from db");
    mongoose.connection.close(function () {
        process.exit(0);
    });
});
var projectSchema = new mongoose.Schema({
    __id: mongoose.Schema.Types.ObjectId,
    projectName: { type: String },
    createdOn: { type: Date, default: Date.now },
    modifiedOn: { type: String, default: Date.now },
    createdBy: { type: String },
    task: String
});
console.log(projectSchema.path("projectName"));
var projectModel = mongoose.model("projectModel", projectSchema);
var instance1 = new projectModel({
    projectName: "inzi",
    createdBy: "first",
    task: "a new task"
});
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
projectModel.findOne({ projectName: "inzi" }, null, function (err, user) {
    if (user) {
        console.log(user, "user");
        return;
    }
    console.log(err, "error");
});
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
app.listen(3000, function () {
    console.log("listening on 3000");
});
