// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
var express = require('express');
var fs = require('fs');

var jsonData = {count: 12, message: 'hey'};

var app = express();

app.get('/', function(req, res) {
  var filePath = "./index.html";
  fs.createReadStream(filePath).pipe(res);
});

app.get('/data', function(req, res) {
  res.json(jsonData);
});

app.listen(3000);