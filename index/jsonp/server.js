// 服务端

// 引入支持接受请求，返回响应的模块http
const http = require('http');

// 创建服务端程序实例
http.createServer(
	// 每当有客户端发来请求时，自动调用一下回调函数
	(req, res) => {
		res.setHeader('Content-Type','text/plain; charset=utf-8');
		var weather = '北京 晴 12~32'
		res.write(weather)
		res.end();

		console.log('server is runing','http://localhost:3000');

}

	// 并监听3000端口
).listen(3000)
