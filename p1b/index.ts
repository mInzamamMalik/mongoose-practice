import express = require("express");

var connection = require("./model/db");



let app = express();



app.listen(3000, () => {
    console.log("listening at 3000");
});