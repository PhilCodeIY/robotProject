var MongoDB = require('mongodb')
var MongoClient = MongoDB.MongoClient;

var url  = "mongodb://localhost:27017/data4Bots"
MongoClient.connect(url, function (error, db){

  if (error) {
    //found an error, tell the world
    console.log(error);
  }
  else{
    //no error connecting to the database server
    console.log("Connection Capital, Captain!");
  }
//query to find all users
  let query = {};

  //Run query against the users collectxion and turn it into an array called userDocuments
  db.collection("users").find(query).toArray(function(error, userDocuments){
    //check for an error running the query
      if (error) {
        //found an error running the query
        console.log("Error fectching the fetching users");
      }
      else {
          //No error, lets look at it
          console.log(userDocuments);
      }
    });
  db.close();
})
