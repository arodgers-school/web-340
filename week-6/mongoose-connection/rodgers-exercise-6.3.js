var mongoose = require("mongoose");

var mongoDB = "mongodb+srv://adrodgers:Buweb340pw@buwebdev-cluster-1.zjoha.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {
  useMongoClient: true,
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function () {
  console.log("Application connected to Atlas MongoDB instance");
});
