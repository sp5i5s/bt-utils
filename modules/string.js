var base = require('./base');
var res = require('./res/rules');

var p = String.prototype;

// 加入一系列原生字符校验
for(let fn in res.default){
    p['is_' + fn] = function(){
       return res.default[fn].call(this,this);
    }
}

 // 文本超长隐藏
p.getStringOverflow = function(_length = 20,_tag = '...'){
    if(this.length > _length){
        return this.substring(0,_length - _tag.length) + _tag;
    }
    return this;
}

class string extends base{
    constructor(){
		  super();
	}

    // 全局字符替换
    replace(str,old_value,new_value){
        var reg = new RegExp(old_value,"g"); 
        return str.replace(reg, new_value); 
    }
    // 计算文本长度
}

module.exports = string.prototype