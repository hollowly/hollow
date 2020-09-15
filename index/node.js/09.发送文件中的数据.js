var http = require('http');

var server = http.createServer();

server.on('request',function(req, res) {

});

server.listen(3000, function() {
    console.log('Server is running...');
})