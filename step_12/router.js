var http = require('http');
var config = require('./config');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var template = require('art-template');
var url = require('url')

//加载控制器
var indexController = require('./controllers/index');
var musicController = require('./controllers/music');

module.exports = function(req,res){
    
  req.url = decodeURI(req.url);

  // 给 req 对象挂在一个 query 属性，在后面就可以直接拿来即用了
  //第二个参数 为 true 时，自动将查询字符串转换为一个对象
  req.query = (url.parse(decodeURI(req.url), true)).query;

    if(req.url === '/' && req.method === 'GET'){
        indexController.showIndex(req,res);
    }else if(req.url === '/add' && req.method === 'GET'){
        musicController.showAdd(req,res);
    }else if(req.url === '/add' && req.method === 'POST'){
        // console.log('添加表单提交');//可以用postman来测试 《=============看这里
        musicController.doAdd(req,res);
    }else if(req.url.startsWith('/edit') && req.method === 'GET'){
        musicController.showEdit(req,res);
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
};