/*
Title: Exercise 2.3
Author: Adam Rodgers
Date: 22 Aug 2021
Modified By: Adam Rodgers
Description: Express Routes
Resources:

*/

// Load Express and http module and define app variable
var express = require("express");
var http = require("http");
var app = express();

// If user requests root directory, response with hompage
app.get("/", function (request, response) {
  response.end("Welcome to the homepage!");
});

// If user requests /about, respond with about page
app.get("/about", function (request, response) {
  response.end("Welcome to the about page!");
});

// If user requests /contact, respond with contact page
app.get("/contact", function (request, response) {
  response.end("Welcome to the contact page!");
});

// Any other routes will result in 404, so respond with 404!
app.use(function (request, response) {
  response.statusCode = 404;
  response.end("404!");
});

// Open server listening on port 8080
http.createServer(app).listen(8080);
