var http = require('http');
http.createServer(function(req, res){
  res.writeHead(200, {'content-type': 'text/plain'});
  res.end('Hello World');
}).listen(8080, '127.0.0.1');
console.log('Server is listening on localhost:8080/');
