var express = require('express');
var app = express();
var port = 8000;

app.listen(port, function(err, res) {
  if(err) {
    console.err("server error")
  } else {
    console.log("server started on 8000");
  }
});