var express =require('express');
var webpack = require('webpack');
var path = require('path');
var config = require('../webpack.config.js');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');


var app = express();
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./bundle'));
app.use('/', function(req, res){
    res.sendFile(path.resolve('index.html'));
});

var port = 3000;

app.listen(port,function(err){
    if(err)
        throw err;
    console.log('server listening on port',port);
});
