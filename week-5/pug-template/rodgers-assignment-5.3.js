/*
Title: Exercise 5.3
Author: Adam Rodgers
Date: 12 Sep 2021
Modified By: Adam Rodgers
Description: Pug Template
Resources:

*/

// Set requires
var express = require("express");
var http = require("http");
var path = require("path");
var pug = require("pug");

// Set app functions
app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

// Set index route and message to render
app.get("/", function (request, response) {
  response.render("index", {
    message: "Welcome to Adam's Pug Template Page!",
  });
});

// Open webserver and listen on port 8080
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
