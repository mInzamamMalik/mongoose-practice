var express = require("express");
var connection = require("./model/db");
var app = express();
app.listen(3000, function () {
    console.log("listening at 3000");
});
