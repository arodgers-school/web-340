/*
Title: Exercise 1.3
Author: Adam Rodgers
Date: 8 Aug 2021
Modified By: Adam Rodgers
Description: Modules
Resources:

*/

var url = require('url');

var parsedURL = url.parse('https://www.example.com/profile?name=rodgers');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);