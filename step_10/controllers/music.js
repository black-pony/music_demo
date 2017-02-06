var fs = require('fs');
var path = require('path');
var mime = require('mime');
var template = require('art-template');
var render = require('../common/render');

exports.showAdd = function(req, res) {
    var data = {title:'添加音乐'};
    render(req,res,'add',data); 
}

exports.doAdd = function(req,res){
    //request对象是一个可读流
    var data = '';
    req.on('data',function(chunk){
        data += chunk;
    })
    req.on('end',function(){
        res.end(data);
    })
}

exports.showEdit = function(req, res) {
    var data = {title:'编辑音乐'};
    render(req,res,'edit',data);
}
