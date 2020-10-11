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
    } else if(url === '/products') {
            var products = [{
                name:'苹果 X',
                price:8888
            },
            {
                name:'菠萝 X',
                price:6666
            },
            {
                name:'小辣椒 X',
                price:1999
            },
        ]
        res.end(JSON.stringify(products));
    } else {
        res.end('404 Not Found.');
    }
})

server.listen(3000, function() {
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/ 来进行访问');
})