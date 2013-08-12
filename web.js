var express = require('express');

var fs = require('fs');
var buf = require('buffer');
var textToDisplay = fs.readFileSync('index.html');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(textToDisplay.toString('utf8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
  
