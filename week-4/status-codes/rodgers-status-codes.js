/*
Title: Exercise 4.3
Author: Adam Rodgers
Date: 4 Sep 2021
Modified By: Adam Rodgers
Description: Status Codes
Resources:

*/

// Load express and Node module http
var express = require("express");
var http = require("http");
var app = express();

// Set a view for /not-found that replies with a 404 status code
app.get("/not-found", function (request, response) {
  response.status(404);
  response.json({
    error: "This page was not found.",
  });
});

// Set a view for /ok that replies with a 200 status code
app.get("/ok", function (request, response) {
  response.status(200);
  response.json({
    message: "This page loaded correctly.",
  });
});

// Set a view for /not-implemented that replies with a 501 status code
app.get("/not-implemented", function (request, response) {
  response.status(501);
  response.json({
    error: "This page has not been implemented.",
  });
});

// Open webserver on port 8080
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080");
});
