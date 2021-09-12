/*
Title: Exercise 5.2
Author: Adam Rodgers
Date: 12 Sep 2021
Modified By: Adam Rodgers
Description: If-Else-Render
Resources:

*/

// Set requires
var express = require("express");
var http = require("http");
var path = require("path");

// Set app functions
app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Assign array to n
var n = ["Frank Herbert", "George Orwell", "Isaac Asimov", "Arthur C. Clark"];

// Set index route
app.get("/", function (request, response) {
  response.render("index", {
    names: n,
  });
});

// Open webserver and listen on port 8080
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
