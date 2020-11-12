var http = require('http');
var fs = require('fs');

var server = http.createServer();

var wwwDir = 'E:/hollowly/hollow/index/node.js/初步实现Apache功能';

server.on('request',function(req, res) {
    var url = req.url;

    var filePath = '/index.html';
    if(url !== '/') {
        filePath = url;
    }
    fs.readFile(wwwDir + filePath, function(err,data) {
        if(err) {
            res.end('404 Not Found.');
            return;
        }
        res.end(data);
    })

}).listen(3000)