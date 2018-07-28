var express = require('express');
var app = express();
var port = 8000;

app.use(log);

app.get('/', log, hello);

function log(req, res, next) {
  console.log(new Date(), req.method, req.url);
  next();
}

function hello(req, res, next) {
  res.write('Hello \n' + 'World')
  res.end();
}

app.listen(port, function(err, res) {
  if(err) {
    console.err("server error")
  } else {
    console.log("server started on 8000");
  }
});