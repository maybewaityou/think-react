var path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: 'file-loader?name=[name].[ext]' },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader',
                    'babel-loader',
                    'eslint-loader'
                ]},
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
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url?limit=8192'
            }
        ]
    }
};
