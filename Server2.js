var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('I dont know what you are looking for');
  res.end();
}).listen(4052);