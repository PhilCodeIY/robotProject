const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express');
const data = require('./data')
const path = require('path')
const userRouter = require('./routers/userouters')




app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static(path.join(__dirname, 'static')))

app.use(userRouter)

app.listen(3000, function(){
  console.log("App running on port 3000")

})
