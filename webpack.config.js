var path = require('path');

module.exports = {
    entry: {
        app: './src/index.jsx',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
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
