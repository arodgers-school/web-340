// Load Express and http module and define app variable
var express = require("express");
var http = require("http");
var app = express();

// Use express to look for requests and provide a response
app.use(function (request, response) {
  // Log request to console
  console.log("In comes a request to: " + request.url);
  // Respond to request
  response.end("Hello World");
});

// Open server listening on port 8080
http.createServer(app).listen(8080);
