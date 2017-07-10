const path = require('path');
const webpack = require('webpack');

const env = process.env.NODE_ENV;

const entryPath = './src/index.jsx';
const dirPath = __dirname;
const publicDirName = '/';

var config = {
    entry: {
        jsx: entryPath,
        html: dirPath + '/index.html'
    },
    output: {
        publicPath: path.join(publicDirName, 'dist'),
        path: path.join(dirPath, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
            __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    configFile: './.eslintrc.json'
                }
            }
        })
    ],
    module: {
        loaders: [
            { test: /\.html$/, loader: 'file-loader?name=[name].[ext]' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'react-hot!babel!eslint-loader' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.scss$/, loader: 'style!css!sass'},
            { test: /\.(jpg|png|svg)$/, loader: 'url?limit=8192' }
        ]
    }
};

if (env === 'production') {
    var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    });
    var occurenceOrderPlugin = new webpack.optimize.OccurenceOrderPlugin();
    config.plugins.push(uglifyJsPlugin);
    config.plugins.push(occurenceOrderPlugin);
}

module.exports = config;
