/*
Title: Exercise 4.4
Author: Professor Krasso
Date: 4 Sep 2021
Modified By: Adam Rodgers
Description: cURL
Resources: https://github.com/buwebdev/web-340/blob/master/week-4/crud/app.js

*/

// Load express and Node module http
const express = require("express");
const http = require("http");

// Set express variables and port
let app = express();
app.set("port", process.env.PORT || 3000);

// Respond to GET request at /
app.get("/", function (req, res) {
  res.send("API invoked as an HTTP GET request.");
});

// Respond to PUT request at /
app.put("/", function (req, res) {
  res.send("API invoked as an HTTP PUT request.");
});

// Respond to POST request at /
app.post("/", function (req, res) {
  res.send("API invoked as an HTTP POST request");
});

// Respond to SEND request at /
app.delete("/", function (req, res) {
  res.send("API invoked as an HTTP DELETE request");
});

// Open webserver on port defined by PORT environment variable or 3000, if env var not defined.
http.createServer(app).listen(app.get("port"), function () {
  console.log(`Application started and listening on port ${app.get("port")}`);
});
