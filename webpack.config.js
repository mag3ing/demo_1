/**
 * Created by mag on 16-4-4.
 */
 var  webpack = require('webpack');
module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './index.js'
    ],
    output: {
        path: __dirname + '/bundle/',
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
                loader: 'style-loader!css-loader?'
            },
            {
                test: /.(jpg|png)$/,
                loader:'url-loader'
            }

        ],
        query: {
            presets: ["es2015","react",'react-hmre'],
            plugins: ["transform-react-jsx"]
        }
    }
};
