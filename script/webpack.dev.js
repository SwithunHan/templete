const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  context: path.resolve(__dirname, '../'), // 将 entry 的根路口指向 context 配置的文件夹
  mode: 'production',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // 配置开发服务运行时的文件根目录
    host: 'localhost', // 开发服务器监听的主机地址
    compress: true, // 开发服务器是否启动gzip等压缩
    port: 8081, // 开发服务器监听的端口
  },
});

