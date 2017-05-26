var base  = require('./base')

class dom extends base{

    constructor(){
		super();
	}
    // 根据ID获取指定DOM
    byId(_id){
        return document.getElementById(_id);
    }
    // 根据Name获取相关DOM
    byName(_name){
        let list = document.getElementsByName(_name);
        if(list.length > 0)
            return list[0];
        return list;
    }
}

module.exports = dom.prototype;