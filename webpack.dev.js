const common = require('./webpack.base')
const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin')
const ip = require('ip').address()

const dashboard = new Dashboard()

const options = {
    mode: 'development',
    output: {
        filename: 'index.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        library: "spark-swiper",
        libraryTarget: "umd",
        libraryExport : "default",
        umdNamedDefine: true
    },
    devtool: 'inline-source-map',
    optimization: {
        minimize: false
    },
    devServer: {
        host: ip,
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8080,
        quiet: true,
        open: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin(dashboard.setData)
    ]
}



module.exports = (env, argv) => {
    return merge(common(argv), options)
}