const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './js/[name].[hash].js',
    publicPath: '',
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCssAssetsPlugin({}),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '../', 'src'),
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/, // 被 test 匹配的文件都会被 babel 编译
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env'],
          //   plugins: ['@babel/plugin-transform-runtime'],
          // },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // 如果有字体或者视频文件同理
        loader: 'url-loader',
        options: {
          limit: 10000, // 根据需求自行填写
          name: '[name].[ext]?[hash]',
          // 输出路径
          outputPath: 'images/',
        },
      },
      {
        test: /\.(eot|woff|ttf)$/,
        loader: 'file-loader',
        options: {
          limit: 10000, // 根据需求自行填写
          name: '[name].[ext]?[hash]',
          // 输出路径
          outputPath: 'fonts/',
        },
      },
      {
        test: /\.(c|le)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/[name].[hash].css',
      chunkFilename: './css/[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: { // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
      },
    }),
  ],

};
