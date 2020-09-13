var http = require('http');


var server = http.createServer();

server.on('request',function(req ,res) {
    // console.log('收到客户端的请求，请求路径是' + req.url);
    var url = req.url;

    if(url === "/") {
        res.end('index page');
    } else if (url === '/login') {
        res.end('登录 page');
    } else if (url === '/register') {
        res.end('注册 page');
    } else if (url === '/haha') {
        res.end('哈哈哈 page');
    } else {
        res.end('404 not found.')
    }
})

server.listen(3002, function() {
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/ 来进行访问');
})