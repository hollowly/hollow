const path = require('path');  //在node (全局) 中寻找 path 包——用来配置出口文件路径的
const webpack = require('webpack');  //在 node(全局) 中寻找 webpack 包——用来配置横幅的(版权)
const HtmlWebpackPlugin = require('html-webpack-plugin'); //在 node(全局) 中寻找 html-webpack-plugin 包(用来webpack自动帮我们生成一个最终html文件)
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin'); // 在mode(全局) 中寻找uglifyjs-webpack-plugin(用来压缩js代码的)

module.exports = {
    entry: './src/main.js',     //入口文件
    output: {      //出口文件
        path: path.resolve(__dirname, 'dist'),  //出口文件路径
        filename: 'bundle.js',   //出口文件名字
        // publicPath: 'dist/'
      },
    module: {
        rules: [
            // css 文件打包配置
            {
              test: /\.css$/, 
            // css-loader 解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码
            // style-loader 将模块的导出作为样式添加到 DOM 中
            // 使用多个loader时，是从右向左，所以stype-loader在css-loader前面
              use: [ 'style-loader', 'css-loader' ]   
            },
            // less 文件打包配置
            {
              test: /\.less$/,
              use: [{
                  loader: "style-loader" // creates style nodes from JS strings
              }, {
                  loader: "css-loader" // translates CSS into CommonJS
              }, {
                  loader: "less-loader" // compiles Less to CSS
              }]
            },
            // 图片打包配置
            {
              test: /\.(png|jpg|gif)$/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    // 当加载图片小于limit时，会将图片编译成base64字符串形式
                    // 当加载的图片大于limit时，需要使用 file-loader 模块进行加载
                    limit: 8192,
                    name:'img/[name].[hash:8].[ext]'
                  },
                }
              ]
            },
            // webpack ES6转ES5的配置
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['es2015']
                }
              }
            },
            // .vue 文件的配置
            {
              test:/\.vue$/,
              use:['vue-loader']
            }
            
        ]
    },
    // 配置 Vue.js 的引用
    resolve: {
      // alias:别名
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
      }
    },
    // 横幅的配置(版权)
    plugins:[
      new webpack.BannerPlugin('最终版权归hollow所有'),
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
      // new UglifyjsWebpackPlugin(),
    ],
    // 本地服务的配置
    devServer: {
      contentBase:'./dist',
      inline:true,
    }
}