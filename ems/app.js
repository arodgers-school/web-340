/*
Title: 
  Exercise 6.4
  Updated for Assignment 7.4
              Exercise 8.2
              Exercise 8.3
              Assignment 8.4
Author: Adam Rodgers
Date: 
  18 Sep 2021
  Updated 26 Sep 2021
          03 October 2021
Modified By: Adam Rodgers
Description: EMS
Resources:

*/

// Set requires
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var Employee = require("./models/employee");

// Set Atlas connection string (hid password)
var mongoDB = "mongodb+srv://adrodgers:buwebdev340@buwebdev-cluster-1.zjoha.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Connect to db with connection string variable
mongoose.connect(mongoDB, {
  useMongoClient: true,
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

// Give error message if connection fails
db.on("error", console.error.bind(console, "MongoDB connected error: "));

// Give success msg if connection succedes
db.once("open", function () {
  console.log("Application connected to Atlas MongoDB instance");
});

// Setup CSRF protection
var csrfProtection = csrf({ cookie: true });

// Initialize express
var app = express();

// Set views location and EJS as view engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Morgan options
app.use(logger("short"));
// Initialize helmet
app.use(helmet.xssFilter());
// Initialize body-parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// Init cookie-parser and csrf protection
app.use(cookieParser());
app.use(csrfProtection);
app.use(function (request, response, next) {
  var token = request.csrfToken();
  response.cookie("XSRF-TOKEN", token);
  response.locals.csrfToken = token;
  next();
});

// Model
var employee = new Employee({
  firstName: "Adam",
  lastName: "Rodgers",
});

// Set view for root directory
app.get("/", function (request, response) {
  response.render("index", {
    title: "XSS Prevention Example",
  });
});

// Routing for 'new'
app.get("/new", function (request, response) {
  response.render("new", {
    message: "Assignment 8.3",
  });
});

// Routing for 'list'
app.get("/list", function (request, response) {
  Employee.find({}, function (error, employees) {
    if (error) throw error;

    response.render("list", {
      title: "Employee Names",
      employees: employees,
    });
  });
});

// New routing for Exercise 8.3 - Updated for Assignment 8.4
app.post("/process", function (request, response) {
  // console.log(request.body.txtName);
  if (!request.body.txtName) {
    response.status(400).send("Entries must have a name");
    return;
  }

  // Get form data
  var employeeName = request.body.txtName;
  console.log(employeeName);

  var employee = new Employee({
    name: employeeName,
  });

  // Save data
  employee.save(function (error) {
    if (error) throw error;
    console.log(employeeName + " saved successfully!");
  });

  response.redirect("/list");
});

// Include static folder for CSS
app.use(express.static(__dirname + "/css"));

// Start webserver on port 8080
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
