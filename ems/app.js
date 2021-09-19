/*
Title: Exercise 6.4
Author: Adam Rodgers
Date: 18 Sep 2021
Modified By: Adam Rodgers
Description: EMS
Resources:

*/

// Set requires
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

// Set views location and EJS as view engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Morgan options
app.use(logger("short"));

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
