var base  = require('./base')

class event extends base{

    constructor(){
		super();
	}

    // 添加事件
    add(object,event_name,func){
        object.addEventListener(event_name,func);
    }
    // 删除事件
    remove(object,event_name,func){
        object.removeEventListener(event_name,func,false);
    }
}

module.exports = event.prototype;