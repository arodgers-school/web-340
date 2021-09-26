/*
Title: 
  Exercise 6.4
  Updated for Assignment 7.4
Author: Adam Rodgers
Date: 
  18 Sep 2021
  Updated 26 Sep 2021
Modified By: Adam Rodgers
Description: EMS
Resources:

*/

// Set requires
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var Employee = require("./models/employee");

// Set Atlas connection string (hid password)
var mongoDB = "mongodb+srv://adrodgers:password@buwebdev-cluster-1.zjoha.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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

var app = express();

// Set views location and EJS as view engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Morgan options
app.use(logger("short"));

// Model
var employee = new Employee({
  name: "Adam",
});

// Set view for root directory
app.get("/", function (request, response) {
  response.render("index", {
    title: "Home page",
  });
});

// Include static folder for CSS
app.use(express.static(__dirname + "/css"));

// Start webserver on port 8080
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
