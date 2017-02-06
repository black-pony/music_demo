var http = require('http');
var config = require('./config');

var server = http.createServer();
server.on('request',function(req,res){
    res.end('Hello World');
});
server.listen(config.port,function(){
    console.log('server is listening at port ' + config.port);
});