// 'use strict';
/** 执行合并打包任务 */
let path = require('path');
let webpack = require('webpack');
let excludePath = /(node_modules|dist)/; // 排除扫描的文件夹

module.exports = {
    // 文件入口 entry
    // entry: {
    //     // 通用模块打包
    //     common:['vue','vuex','vue-router'],
    //     app:'./src/router.js',
    // },
    entry:'./src/router.js',
    // 输出文件夹路径以及可被分块输出路径和名字
    output: {
        // 输出文件路径
        path: './dist',
        publicPath:'dist/',
        // 输出文件名字
        filename: 'app.bundle.js',
    },
    // module模块
    module: {
        // 模块loaders
        loaders: [
            { test: /\.vue$/, loader: 'vue', exclude: excludePath },
            { test: /\.js$/, loader: 'babel', exclude: excludePath },	
            { test: /\.css$/, loader: 'style-loader!css-loader', exclude: excludePath},
        ]
    },
  	babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    watch: true, // 是否监听文件变化
};
