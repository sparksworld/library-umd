const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const glob = require('glob')



let isProduction = []

module.exports = (argv) => {
    if (argv.mode == "development") {
        isProduction.push(new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            inject: 'body',
            chunks: ['main']
        }))
    }
    return {
        entry: {
            main: glob.sync(path.resolve(__dirname, './src/index.*'))[0]
        },
        module: {
            rules: [{
                    test: /\.tsx?$/,
                    exclude: /(node_modules)/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }, {
                        loader: 'ts-loader'
                    }]
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    },
                }, {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [
                                    require('autoprefixer')({
                                        browsers: ['iOS >= 7', 'Android >= 4.1']
                                    }),
                                    require('postcss-px2rem')({
                                        remUnit: 100
                                    })
                                ]
                            }
                        },
                        'sass-loader',
                    ],
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.scss', 'css'],
            alias: {
                '~': path.resolve(__dirname, './src')
            }
        },

        plugins: [
            ...isProduction,
            new webpack.BannerPlugin(`Spark created at ${new Date()} \n`)
        ]
    }
}