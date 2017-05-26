var base = require('./base');
var res = require('./res/rules');

var p = String.prototype;

// 加入一系列原生字符校验
for(let fn in res.default){
    p['is_' + fn] = function(){
       return res.default[fn].call(this,this);
    }
}

class string extends base{
    constructor(){
		  super();
	}
    // 在string中返回指定value的info
    getInfo(string,key,value){
        var info = string.find(function(c, index, arr){
          return c[key] == value;
        })
        return info || null;
    }
}

module.exports = string.prototype