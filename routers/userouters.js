const express = require('express')
const router = express.Router()
const data = require('../data')


router.get("/", function(req, res, next){
  res.render("index", data)
})

router.get("/user/:username", function(req, res, next){
  const user = data.users.filter(
    function(person){
      return person.username === req.params.username
    })[0]
    res.render("user", user)
})
 module.exports = router
