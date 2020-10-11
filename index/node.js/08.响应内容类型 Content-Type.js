var http = require('http');

var server = http.createServer();

server.on('request',function(req, res) {
    // 在服务器默认发送的数据，是utf8编码内容，但是计算机不知道你是utf8编码的内容
    // 浏览器在不知道服务器响应内容的编码情况下会按照当前操作系统默认的编码去解析
    // 中文操作系统默认是 gbk
    var url = req.url;

    if(url === '/plain') {
        res.setHeader('Content-Type','text/plain; charset=utf-8');
        res.end('hello 世界');
    } else if(url === '/html') {
        res.setHeader('Content-Type','text/html; charset=utf-8');
        res.end('<strong>加粗</strong> <a href="">点我</a>');
    }
})

server.listen(3000,function() {
    console.log('Server is running...');
})
