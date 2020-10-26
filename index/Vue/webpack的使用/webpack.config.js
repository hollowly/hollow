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
            // css-loader 解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码
            // style-loader 将模块的导出作为样式添加到 DOM 中
            // 使用多个loader时，是从右向左，所以stype-loader在css-loader前面
              use: [ 'style-loader', 'css-loader' ]   
            },
            {
              test: /\.less$/,
              use: [{
                  loader: "style-loader" // creates style nodes from JS strings
              }, {
                  loader: "css-loader" // translates CSS into CommonJS
              }, {
                  loader: "less-loader" // compiles Less to CSS
              }]
            }
        ]
    }
}