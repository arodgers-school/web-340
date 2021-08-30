/*
Title: Exercise 3.4
Author: Adam Rodgers
Date: 29 Aug 2021
Modified By: Adam Rodgers
Description: Putting it all Together
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

// Set views for index, about, contact, and products
app.get("/", function (request, response) {
  response.render("index", {
    message: "home page",
  });
});
app.get("/about", function (request, response) {
  response.render("about", {
    message: "about page",
  });
});
app.get("/contact", function (request, response) {
  response.render("contact", {
    message: "contact page",
  });
});
app.get("/products", function (request, response) {
  response.render("products", {
    message: "products page",
  });
});

// Open webserver on port 8080 with Express
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080.");
});
