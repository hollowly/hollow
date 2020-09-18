var http = require('http');
var fs = require('fs');

var server = http.createServer();


server.on('Request', function(req,res) {
    var url = req.url;

    res.end(url);
    // var filePath = '/index.html';
    // res.end('文件读取成功');
    // if(url !== '/') {
    //     filePath = url;
    // }

})


server.listen(3000, function() {
    console.log('Server is running...');
})