var http = require('http');
var config = require('./config');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

var server = http.createServer();
server.on('request',function(req,res){
    req.url = decodeURI(req.url);
    if(req.url === '/'){
        fs.readFile(path.join(__dirname,'views/index.html'),function(err,data){
            if(err){
                return res.end('404 not found');
            }
            res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
            res.write(data);
            res.end();
        });
    }else if((req.url.indexOf('/node_modules') === 0) || (req.url.indexOf('/uploads') === 0)){
        fs.readFile(path.join(__dirname,req.url),function(err,data){
            if(err){
                return res.end('404 not found');
            }
            res.writeHead(200,{'Content-Type':mime.lookup(req.url)});
            res.write(data);
            res.end();
        });
    }
});
server.listen(config.port,function(){
    console.log('server is listening at port ' + config.port);
});