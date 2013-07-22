var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
  var data = fs.readFileSync('index.html');
  response.writeHeader(200, {"Content-type": "text/html"});
  response.write(data);
  response.close();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
