
exports.a = 'hello';

exports.b = Array(1,2,3);

exports.c = function() {
    console.log("add");
}

function c() {
    console.log('add');
}
c();

exports.readFile = function(path) {
    console.log('文件路径',path);
}