var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request',function(req, res) {
    var url = req.url;

    if(url === '/') {
        fs.readFile('./index/index.html',function(err, data) {
            if(err) {
                res.setHeader('Content-Type','text/plain; charset=utf-8');
                res.end('文件读取失败，请稍后重试！');
            } else {
                res.setHeader('Content-Type','text/html; charset=utf-8');
                res.end(data);
            }
        })
    } else if(url === '/yxlm') {
        fs.readFile('./img/10.jpg',function(err, data) {
            if(err) {
                res.setHeader('Content-Type','text/plain; charset=utf-8');
                res.end('文件读取失败，请稍后再试!');
            } else {
                res.setHeader('Content-Type','image/jpeg');
                res.end(data);
            }
        })
    } else {
        res.end('404 Not Found.');
    }
});

server.listen(3000, function() {
    console.log('服务器已启动,可以通过http://localhost:3000/进行访问');
    console.log('Server is running...');
})