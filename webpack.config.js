'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.[hash:7].js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            '@': resolve('src'),
        }
    },
    devServer: {
        clientLogLevel: 'warning',
        contentBase: './static',
        publicPath: "/",
        hot: true,
        host: 'localhost',
        port: 8080,
        open: false,
        overlay: { warnings: false, errors: true }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: path.posix.join('images/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: path.posix.join('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebPackPlugin({
            template: "./static/index.html",
            filename: "./index.html"
        }),
    ],
};