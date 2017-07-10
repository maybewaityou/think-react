const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = process.env.NODE_ENV;

const distPath = 'dist';
const publicDirName = '/';

const webpackConfig = {
    entry: {
        app: './src/index.jsx',
        // app: './src/index.tsx',
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
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
            __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
        }),
        new webpack.HotModuleReplacementPlugin(), // Enable HMR
        new CleanWebpackPlugin([distPath]),
        new HtmlWebpackPlugin({
            title: 'think-react',
            template: 'src/assets/template/index.html',
        })
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader',
                    'babel-loader',
                    'eslint-loader'
                ]
            },
            /* Loading Typescript */
            {
                test: /\.tsx?$/,
                use: [
                    'ts-loader'
                ],
                exclude: /node_modules/
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
            }
        ]
    }
};

if (env === 'production') {
    const uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    });
    const occurenceOrderPlugin = new webpack.optimize.OccurenceOrderPlugin();
    webpackConfig.plugins.push(uglifyJsPlugin);
    webpackConfig.plugins.push(occurenceOrderPlugin);
}

module.exports = webpackConfig;
