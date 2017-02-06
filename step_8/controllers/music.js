var fs = require('fs');
var path = require('path');
var mime = require('mime');
var template = require('art-template');
var render = require('../common/render');

exports.showAdd = function(req, res) {
    var data = {title:'添加音乐'};
    render(req,res,'add',data); 
}

exports.showEdit = function(req, res) {
    var data = {title:'编辑音乐'};
    render(req,res,'edit',data);
}