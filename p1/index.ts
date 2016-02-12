import express = require("express");
import mongoose = require("mongoose");


let app = express();


mongoose.connect("mongodb://malikasinger:panacloud@ds056698.mongolab.com:56698/malikasingerdb");



mongoose.connection.on('connected', function() {
    console.log("Mongoose is connected");
});

mongoose.connection.on('disconnected', function() {
    console.log("Mongoose is disconnected");
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ', err);
});


/////this will run before app closing
process.on('SIGINT', function() {
    console.log("app is terminating");
    mongoose.connection.close(function() {
        console.log('Mongoose default connection closed');
    
        process.exit(0);
    });
    
});



app.listen(3000, () => {
    console.log("listening at 3000");

});

