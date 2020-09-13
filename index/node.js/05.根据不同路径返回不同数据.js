var http = require('http');


var server = http.createServer();

server.on('request',function(req ,res) {
    console.log('收到客户端的请求，请求路径是' + req.url);
    
    if(req.url ="/") {
        res.write('index');
    } else if (req.url = '/login') {
        res.write('登录');
    } else if (req.url = '/register') {
        res.write('注册');
    } else if (req.url = '/haha') {
        res.write('哈哈哈');
    }
    
    res.end();

})

server.listen(3002, function() {
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/ 来进行访问');
})