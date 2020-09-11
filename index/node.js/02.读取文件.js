var fs = require('fs');

fs.readFile('1.txt',function(error,data) {
    console.log(data.toString());
    console.log(error);
});

