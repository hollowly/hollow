// 服务端

// 引入支持接受请求，返回响应的模块http
const http = require('http');
const url = require('url')

// 创建服务端程序实例
http.createServer(
	// 每当有客户端发来请求时，自动调用一下回调函数
	(req, res) => {
		var Url = url.parse(req.url,true)
		// console.log(Url);
		var callback = Url.query.callback;
		// console.log(callback);
		res.setHeader('Content-Type','text/plain; charset=utf-8');
		var weather = '北京 晴 12~32'
		res.write(`${callback}("${weather}")`)
		
		setTimeout(() => {
			res.end();
		}, 500);

		// console.log('server is runing','http://localhost:3000');

}

	// 并监听3000端口
).listen(3000)