/*
Title: Exercise 1.5
Author: Adam Rodgers
Date: 8 Aug 2021
Modified By: Adam Rodgers
Description: Hello World
Resources:

*/

var http = require("http");

function processRequest(req, res) {
  var body = "Adam's simple web server";
  var contentLength = body.length;
  res.writeHead(200, {
    "Content-Length": contentLength,
    "Content-Type": "text/plain",
  });
  res.end(body);
}
var s = http.createServer(processRequest);
s.listen(8080);
