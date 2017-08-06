const express = require('express')
const router = express.Router()
const data = require('../data')


router.get("/", function(req, res, next){

  res.render("index", data)

  // require the mongodb module and initialize it

  var MongoDB = require('mongodb')
  var MongoClient = MongoDB.MongoClient;
  var url  = "mongodb://localhost:27017/data4Bots"
  //connect to our databse and save that connection to a variable so we can use it
  MongoClient.connect(url, function(error, db){
    if (error){
      console.log("everything is not okay", error);
    }
    else{
      //do something here with the successful Connection
      dbConn = db;
    }
  })
})

router.get("/user/:username", function(req, res, next){
  const user = data.users.filter(function(person){
    return person.username === req.params.username
  })[0]
  res.render("user", user)
})

module.exports = router
