const common = require('./webpack.base')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const ClearWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

const options = {
    mode: 'production',
    output: {
        filename: 'index.js',
        publicPath: './',
        path: path.resolve(__dirname, 'dist'),
        library: "test",
        libraryTarget: "umd",
        libraryExport : "default",
        umdNamedDefine: true
    },
    optimization: {
        minimize: true,
        minimizer: [
            // 自定义js优化配置，将会覆盖默认配置
            new UglifyJsPlugin({
                exclude: /\.min\.js$/, // 过滤掉以".min.js"结尾的文件
                cache: true,
                parallel: true, // 开启并行压缩，充分利用cpu
                sourceMap: false,
                extractComments: false, // 是否提取注释到单独的文件
                uglifyOptions: {
                    compress: {
                        unused: true,
                        drop_debugger: true
                    },
                    output: {
                        comments: /spark/gi
                    }
                }
            })
        ]
    },
    plugins: [
        new ClearWebpackPlugin(),
        new ProgressBarPlugin({
            format: 'build [:bar] :percent (:elapsed seconds)',
            clear: true,
            width: 60
        })
    ]
}

if (process.env.npm_config_report) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    options.plugins.push(new BundleAnalyzerPlugin())
}


module.exports = (env, argv) => {
    return merge(common(argv), options)
}