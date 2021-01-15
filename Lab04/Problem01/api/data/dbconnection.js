//const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

require("./games-model.js");
const dbName = "gamesDB";
const dburl = "mongodb://localhost:27017/" + dbName;
mongoose.connect(dburl);

mongoose.connection.on("connected", function () {
  console.log("Mongoose connected to " + dburl);
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose disconnected");
});

mongoose.connection.on("error", function (err) {
  console.log("Mongoose has got a connection error with " + dburl);
});

process.on("SIGINT",function(){
  mongoose.connection.close(function(){
    console.log("Mangoose disconnected by application termination");
    process.exit(0);
  })
});


process.on("SIGUSR2",function(){
  mongoose.connection.close(function(){
    console.log("Mangoose disconnected by application restart.");
    process.kill(process.pid,"SIGUSR2");
  })
});

 
