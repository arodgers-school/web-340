/*
Title: Exercise 3.3
Author: Adam Rodgers
Date: 29 Aug 2021
Modified By: Adam Rodgers
Description: Advanced Routing
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

// Tell express to use Morgan for logging
app.use(logger("short"));

// Set productId view to index
app.get("/:productId", function (request, response) {
  var productId = parseInt(request.params.productId, 10);
  response.render("index", {
    productId: productId,
  });
});

// Open webserver on port 8080 with Express
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080");
});
