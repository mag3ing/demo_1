/**
 * Created by mag on 16-4-4.
 */
 var  webpack = require('webpack');
var qs = require('querystring');
var path = require('path');
module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'babel-polyfill',
        'webpack-hot-middleware/client',
        './index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/bundle/',
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['','.js','.jsx']
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                include: path.join(__dirname),
                loader: 'style-loader!css-loader?' + qs.stringify({
                    modules: true,
                    importLoaders: 1,
                    localIdentName: '[path][name]-[local]'
                })
            },
            {
                test: /.(jpg|png)$/,
                loader:'url-loader'
            },
            {
                test: /\.ogg$/,
                loader: 'file'
            }

        ],
        query: {
            presets: ["es2015","react",'react-hmre'],
            plugins: ["transform-react-jsx"]
        }
    }
};
