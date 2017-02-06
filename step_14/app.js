var http = require('http');
var config = require('./config');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var template = require('art-template');
var router = require('./router');

var server = http.createServer();
server.on('request',function(req,res){
    res.redirect = function (url) {
        res.writeHead(302, {
        'Location': url
        })
        res.end()
    }
    router(req,res);
});
server.listen(config.port,function(){
    console.log('server is listening at port ' + config.port);
});