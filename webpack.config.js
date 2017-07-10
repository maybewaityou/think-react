const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distPath = 'dist';
const publicDirName = '/';

module.exports = {
    entry: {
        app: './src/index.jsx',
        // print: './src/print.js',
        // vendor: ['lodash']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, distPath),
    },
    devServer: {
        hot: true, // Tell the dev-server we're using HMR
        contentBase: path.resolve(__dirname, distPath),
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable HMR
        new CleanWebpackPlugin([distPath]),
        new HtmlWebpackPlugin({
            title: 'think-react'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader',
                    'babel-loader',
                    'eslint-loader'
                ]
            },
            /* Loading CSS */
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            /* Loading Images */
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            /* Loading Fonts */
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            /* Loading Data */
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
        ]
    }
};
