var http = require('http');
var config = require('./config');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var template = require('art-template');

var musicList = [
    {
        "id": 1,
        "title": "富士山下",
        "singer": "陈奕迅",
        "music": "陈奕迅 - 富士山下.mp3",
        "poster": "陈奕迅.jpg"
    },
    {
        "id": 2,
        "title": "石头记",
        "singer": "达明一派",
        "music": "达明一派 - 石头记.mp3",
        "poster": "达明一派.jpg"
    },
    {
        "id": 3,
        "title": "青城山下白素贞",
        "singer": "好妹妹乐队",
        "music": "好妹妹乐队 - 青城山下白素贞.mp3",
        "poster": "好妹妹乐队.jpg"
    },
    {
        "id": 4,
        "title": "友情岁月",
        "singer": "黄耀明",
        "music": "黄耀明 - 友情岁月.mp3",
        "poster": "黄耀明.jpg"
    },
    {
        "id": 5,
        "title": "梦里水乡",
        "singer": "江珊",
        "music": "江珊 - 梦里水乡.mp3",
        "poster": "江珊.jpg"
    },
    {
        "id": 6,
        "title": "Blowing In The Wind",
        "singer": "南方二重唱",
        "music": "南方二重唱 - Blowing In The Wind.mp3",
        "poster": "南方二重唱.jpg"
    },
    {
        "id": 7,
        "title": "女儿情",
        "singer": "万晓利",
        "music": "万晓利 - 女儿情.mp3",
        "poster": "万晓利.jpg"
    },
    {
        "id": 9,
        "title": "五环之歌",
        "singer": "岳云鹏",
        "music": "岳云鹏,MC Hotdog - 五环之歌.mp3",
        "poster": "岳云鹏.jpg"
    }
];

var server = http.createServer();
server.on('request',function(req,res){
    req.url = decodeURI(req.url);
    if(req.url === '/' && req.method === 'GET'){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
        var data = {musicList:musicList,title:'首页'};
        var html = template(__dirname+'/views/index',data);
        res.write(html);
        res.end();
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