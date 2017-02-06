var fs = require('fs');
var path = require('path');
var mime = require('mime');
var template = require('art-template');
var render = require('../common/render');
var Music = require('../models/music')
var formidable = require('formidable')
var config = require('../config')

exports.showAdd = function(req, res) {
    var data = {title:'添加音乐'};
    render(req,res,'add',data); 
}

/**
 * POST /add
 */
exports.doAdd = function(req, res) {
  // 处理普通表单上传（没有文件），使用原生的方式解决
  // request 对象就是一个可读流
  // var data = ''
  // req.on('data', function(chunk) {
  //   data += chunk
  // })
  // req.on('end', function() {
  //   // var queryObj = {}
  //   // data.split('&').forEach(function (query) {
  //   //    queryObj[query.split('=')[0]] = query.split('=')[1]
  //   // })
  //   // res.json(queryObj)
  //   // 使用核心模块 querystring 的 parse 方法将一个查询字符串转换为一个对象
  //   var queryObj = queryString.parse(data)
  //   res.json(queryObj)
  // })


  // 处理有文件的表单上传
  // 有一个第三方包：formidable ，可以专门用来帮我们处理表单文件上传
  // 这个包接收到该文件的时候，会给文件取一个随机不重复的名字
  var form = new formidable.IncomingForm()

  // 指定本次文件上传的路径（默认保存到操作系统的临时目录了）
  form.uploadDir = config.uploadDir

  // 指定本次上传的文件保持扩展名（默认是false，没有扩展名）
  form.keepExtensions = true

  form.parse(req, function (err, fields, files) {

    // 当接收到用户提交的数据的时候，一定要将数据校验，类似于前端中的表单校验
    // 表单提交之前在前台必须要做校验，在后台也一定要做校验
    // 原因在于 浏览器中的 js 可以被禁用
    console.log(fields);
    // return;
    var music = new Music({
      title: fields.title,
      singer: fields.artist,
      music: files.music.name,
      poster: files.poster.name
    })
    
    // 对象的核心就在于 自制（自己管理自己）
    music.save()

    // 添加歌曲成功，让浏览器跳转到首页
    // 302 状态码 表示，重定向（重新定位到一个请求路径）
    // 在请求头中通过 Location 属性指定要重定向的地址
    // 原理：当浏览器接收到本次的响应报文后，发现状态码是302，
    // 然后浏览器将报文中的 Location 拿过来，主动对Location指定的地址发起请求
    res.writeHead(302, {
      'Location': 'http://127.0.0.1:3000/'
    })

    res.end()

  })
}

exports.showEdit = function(req, res) {
    var data = {title:'编辑音乐'};
    render(req,res,'edit',data);
}
