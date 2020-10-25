const path = require('path');  //在node (全局) 中寻找 path 包

module.exports = {
    entry: './src/main.js',     //入口文件
    output: {      //出口文件
        path: path.resolve(__dirname, 'dist'),  //出口文件路径
        filename: 'bundle.js'   //出口文件名字
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [ 'css-loader' ]
            }
        ]
    }
}