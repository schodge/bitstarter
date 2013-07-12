var express = require('express');

var fs = require('fs');
var buf = require('buffer');
var textToDisplay = fs.readFileSync('index.html');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(buf.toString(textToDisplay));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
