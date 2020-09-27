var http = require('http');
var fs = require('fs');

var server = http.createServer();

var wwwDir = 'E:/hollowly/hollow/index/node.js/初步实现Apache功能';

server.on('request',function(req, res) {
    var url = req.url;

    fs.readFile('./template.html', function(err,data) {
        if(err) {
            res.end('404 Not Found.');
            return;
        }
        // 1.如何得到目录列表中的文件名和目录名 (fs.readdir)
        fs.readdir(wwwDir ,function(err, files) {
            if(err) {
                res.end('Can not find www dir.');
            }
            console.log(files);
        })
        data = data.toString();

        // console.log(data);
        // 2.如何将得到的文件名和目录名替换到  template.html 中 (模板引擎)
        res.end(data);
    })
})

server.listen(3000, function() {
    console.log('Server is running...');
})