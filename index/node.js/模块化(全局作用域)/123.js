var bExports = require('./456.js');

console.log(bExports.a);

console.log(bExports.b);

console.log(bExports.c);

var fs = require('fs');

fs.readFile('./123.js',function(err,data) {
    if(err) {
        console.log('读取失败');
    } else {
        console.log(data.toString());
    }
})

bExports.readFile('./123.js');

