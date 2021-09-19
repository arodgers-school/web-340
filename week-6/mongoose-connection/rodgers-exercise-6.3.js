/*
Title: Exercise 6.3
Author: Adam Rodgers
Date: 12 Sep 2021
Modified By: Adam Rodgers
Description: Mongoose Connect
Resources:

*/

// Set requires
var mongoose = require("mongoose");

// Set Atlas connection string
var mongoDB = "mongodb+srv://adrodgers:Buweb340pw@buwebdev-cluster-1.zjoha.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Connect to db with connection string variable
mongoose.connect(mongoDB, {
  useMongoClient: true,
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

// Give error message if connection fails
db.on("error", console.error.bind(console, "MongoDB connected error: "));

// Give success msg if connection succedes
db.once("open", function () {
  console.log("Application connected to Atlas MongoDB instance");
});
