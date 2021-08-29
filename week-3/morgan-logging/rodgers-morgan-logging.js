/*
Title: Exercise 3.2
Author: Adam Rodgers
Date: 29 Aug 2021
Modified By: Adam Rodgers
Description: Morgan Logger
Resources:

*/

// Load express, EJS, Morgan, and Node modules http and path
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

// Set views directory for Express and set view engine to EJS
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Tell express to use Morgan for logging (short output?)
app.use(logger("short"));

// Set index view
app.get("/", function (request, response) {
  response.render("index", {
    message: "Welcome to Adam's Morgan Logger Example!",
  });
});

// Open webserver on port 8080 with Express
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080");
});
