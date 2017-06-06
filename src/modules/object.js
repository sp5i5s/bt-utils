var base  = require('./base')

class object extends base{

    constructor(){
		super();
	}
    // 深度复制一个对象
    clone(_object){
        return JSON.parse(JSON.stringify(_object));
    }
    // 返回某个键的值
    getInfo(_object,key){
        for(let item in _object){
            if( typeof _object[item] == 'object' && item != key ){
                this.indexOf(_object[item],key);
            }else{
                this.result = false;
                if( item === key){
                    this.result = _object[item];
                    return this.result;
                }
            }
        }
        return this.result || null;
    }
    // 判断对象中某个键值是否存在,类似prop in object
    indexOf(_object,key){
        let info = this.getInfo(_object,key);
        return info ? true : false;
    }
}

module.exports = object.prototype;