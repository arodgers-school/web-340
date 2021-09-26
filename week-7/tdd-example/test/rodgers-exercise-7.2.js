// Requires
var assert = require("assert");

// Mocha test for array with chai 'assert' function
describe("String#split", function () {
  it("should return an array of fruits", function () {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});
