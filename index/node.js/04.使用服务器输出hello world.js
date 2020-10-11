var http = require('http');

var server = http.createServer();

server.on('request',function(request, response) {
    console.log('收到客户端的请求了，请求路径是' + request.url);

    // response对象有一个方法：write可以用来给客户端发送响应数据
    // write 可以使用多次，但是最后一定要使用 end 来结束响应，否则客户端会一直等待
    
    // response.write('hello');
    // response.write(' nodejs');

    // 告诉服务器，我的话说完了，你可以呈递给用户了
    // 什上面方法比较麻烦，推荐使用更简单的方法，直接end的同时发送响应数据
    response.end('hello world');
});

server.listen(3000,function() {
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/ 来进行访问');
});