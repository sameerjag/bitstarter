var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());
var content = fs.readFileSync('index.html');
var buffer = new Buffer(36);
buffer.write(content)

app.get('/', function(request, response) {
  response.send(buffer.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
