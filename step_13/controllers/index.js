var render = require('../common/render');
var Music = require('../models/music')

exports.showIndex = function(req, res) {
    var data = {musicList:Music.getAll(),title:'首页'};
    render(req,res,'index',data);  
}