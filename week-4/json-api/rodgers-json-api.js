/*
Title: Exercise 4.2
Author: Adam Rodgers
Date: 4 Sep 2021
Modified By: Adam Rodgers
Description: JSON API
Resources:

*/

// Load express and Node module http
var express = require("express");
var http = require("http");
var app = express();

// Set JSON reponses for customer with a response for firstName, lastName, course, school, and set employeeId to user-entered value
app.get("/customer/:id", function (request, response) {
  var id = parseInt(request.params.id, 10);
  response.json({
    firstName: "Adam",
    lastName: "Rodgers",
    course: "WEB340",
    school: "Bellevue University",
    exmployeeId: id,
  });
});

// Open webserver on port 8080
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080");
});
