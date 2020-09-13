var http = require('http');


var server = http.createServer();

server.on('request',function(request ,response) {
    console.log('收到客户端的请求，请求路径是' + request.url);
    
    if(request.url ="/") {
        response.write('index');
    } else if (request.url = '/login') {
        response.write('登录');
    } else if (request.url = '/register') {
        response.write('注册');
    } else if (request.url = '/haha') {
        response.write('哈哈哈');
    }
    
    response.end();

})

server.listen(3000, function() {
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/ 来进行访问');
})