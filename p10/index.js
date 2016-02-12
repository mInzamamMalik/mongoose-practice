var express = require("express");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb");
var userSchema = new mongoose.Schema({
    companyName: String,
    email: String,
});
var userModel = mongoose.model("users", userSchema);
var salesmanSchema = new mongoose.Schema({
    name: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
var salesmanModel = mongoose.model("salesmans", salesmanSchema);
var orderSchema = new mongoose.Schema({
    orderDescription: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'salesmanSchema' }
});
var orderModel = mongoose.model("orders", orderSchema);
var app = express();
app.use(function (req, res, next) {
    next();
});
app.listen(3000, function () {
    console.log("listening on 3000");
});
//# sourceMappingURL=index.js.map