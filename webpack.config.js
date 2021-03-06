const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        port: 8964,
        historyApiFallback:{
            index: '/dist/index.html'
        },
        proxy: {
            '/manage':{
                target: 'http://admintest.happymmall.com',
                changeOrigin: true
            },
            '/user/logout.do':{
                target: 'http://admintest.happymmall.com',
                changeOrigin: true
            }
        }
    },
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'js/app.bundle.js'
    },
    resolve: {
        alias: {
            page: path.resolve(__dirname, 'src/page'),
            component: path.resolve(__dirname, 'src/component'),
            util: path.resolve(__dirname, 'src/util'),
            service: path.resolve(__dirname, 'src/service'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                //use: [ 'style-loader', 'css-loader' ]
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",  // convert js string to style node
                    use: "css-loader"          // convert css to commonJS module
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            // {
            //     test: /\.(png|svg|jpg|gif|jpeg)$/,
            //     use: ['file-loader']
            // },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: 'favicon.ico' 
        }),
        // create style.css and inster it into output
        new ExtractTextPlugin("css/[name].css")
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: { name: "common" }
            }
        }
    }
};

module.exports = config;   