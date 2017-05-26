/*
    依赖layer插件
 */
var base  = require('./base')

class msg extends base{

    constructor(){
		super();
	}
    // 显示一段简单提醒
    show(_txt){
        layer.closeAll();
        layer.open({content: _txt,skin: 'msg',time: 2});
    }
    // 显示Loading条
    load(_text){
        layer.open( {type: 2 ,content: _text,shadeClose:false,shade: 'background-color: rgba(0,0,0,.5)'} );
    }
    // 关闭所有window
    closeAll(){
        layer.closeAll();
    }

    
}

module.exports = msg.prototype