var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.set('json spaces', 2);

// @url /hello
app.get('/hello', function (req, res) {
  res.send('Hello World!')
})

// @url /hello/json
app.get('/hello/json', function (req, res) {
  res.json({'messages': 'Hello World!'})
})

// @url /cookies
app.get('/cookies', function (req, res) {
  res.send({'cookies': req.cookies})
})

// @url /cookies/renew
app.get('/cookies/renew', function (req, res) {
  var randomNumber = Math.random().toString();
  res.cookie('testing', randomNumber, { maxAge: 900000, httpOnly: true });
  res.send({'cookies': req.cookies})
})


app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})