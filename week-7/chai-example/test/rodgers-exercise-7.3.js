// Set variables
var fruits = require("../rodgers-fruits.js");
var chai = require("chai");
var assert = chai.assert;

// Mocha test for array with chai 'assert' function
describe("fruits", function () {
  it("should return an array of fruits", function () {
    var f = fruits("Apple,Orange,Mango");
    assert(Array.isArray(f));
  });
});
