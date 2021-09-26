/*
Title: Exercise 7.4
Author: Adam Rodgers
Date: 26 Sep 2021
Modified By: Adam Rodgers
Description: EMS Milestone 3
Resources:

*/

// Set requires
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Employee schema
let EmployeeSchema = new Schema({
  name: { type: String, required: true },
});

// Export module
module.exports = mongoose.model("Employee", EmployeeSchema);
