var fs = require('fs');
var path = require('path');
var mime = require('mime');
var template = require('art-template');

module.exports = function(req,res,view,model){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    var html = template(path.join(__dirname,'../views/'+view),model);
    res.write(html);
    res.end();
};