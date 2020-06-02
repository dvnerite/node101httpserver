// write your code here
const http = require('http');

const server = http.createServer(function(req, res) {
    console.log('Received' + req.method + 'request for:' +  req.url);
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello World');
})
server.listen(8080, 'localhost', null, function() {
    console.log('Server is listening in port: 8080')
});

