var fs = require('fs');
var path = require('path');
var mime = require('mime');
var template = require('art-template');

exports.showAdd = function(req, res) {
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    var data = {title:'添加音乐'};
    var html = template(path.join(__dirname,'../views/add'),data);
    res.write(html);
    res.end();
}

exports.showEdit = function(req, res) {
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    var data = {title:'编辑音乐'};
    var html = template(path.join(__dirname,'../views/edit'),data);
    res.write(html);
    res.end();
}