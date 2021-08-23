/*
Title: Exercise 2.4
Author: Adam Rodgers
Date: 22 Aug 2021
Modified By: Adam Rodgers
Description: Express Routes
Resources:

*/

// Load Express and http/path modules and define app variable
var express = require("express");
var http = require("http");
var app = express();
var path = require("path");

// Use 'views' directory for Express views
app.set("views", path.resolve(__dirname, "views"));

// Use EJS view engine with Express
app.set("view engine", "ejs");

// Tell EJS to render message and response variables through Express if user requests homepage (root) URL
app.get("/", function (request, response) {
  response.render("index", {
    firstName: "Adam",
    lastName: "Rodgers",
    address: "1234 Street Ave.",
  });
});

// Open server listening on port 8080
http.createServer(app).listen(8080, function () {
  console.log("EJS-Views app started on port 8080.");
});
