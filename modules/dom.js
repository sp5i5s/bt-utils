var base  = require('./base')
var string = require('./string');

class dom extends base{

    constructor(){
		super();
	}
    // 根据ID获取指定DOM
    byId(_id){
        return document.getElementById(string.replace(_id,'#',''));
    }
    // 根据ID或Class获取DOM
    get(_id){
        if(_id.indexOf('.') > -1){
            let list = document.getElementsByClassName(string.replace(_id,'\\.',''));
            this._object = Array.from(list);
        }else{
            this._object = [this.byId(_id)];
        }
        
        return this;
    }
    // 根据Name获取相关DOM
    byName(_name){
        let list = document.getElementsByName(_name);
        if(list.length > 0){
            this._object = Array.from(list);
        }
        return this;
    }
    // 根据TagName获取相关DOM
    byTagName(_name){
        let list = document.getElementsByTagName(_name);
        if(list.length > 0){
            this._object = Array.from(list);
        }
        return this;
    }
    // 返回dom原型
    get valueOf(){
        if(this._object.length >1){
            return this._object;    
        }
        return this._object[0];
    }
    // 基础DOM操作方法
    _dom_ctrols(_func){
        for(let info of this._object){
            _func(info);
        }
        return this;
    }
    // 增加class
    addClass(_name){
        this._dom_ctrols((info)=>{
            if(info.className.indexOf(_name) == -1){
                info.className += ' ' + _name;
            }
        })
        return this;
    }
    // 删除class
    removeClass(_name){
        this._dom_ctrols((info)=>{
            info.className = string.replace(info.className,_name,'');
        })
        return this;
    }
    // 显示？隐藏DOM主方法
    _hide_show(_value){
        this._dom_ctrols((info)=>{
            info.style.display = _value;
        });
    }
    // 隐藏DOM
    hide(){
        this._hide_show('none');
    }
    // 显示DOM
    show(){
        this._hide_show('block');
    }
    set html(_value){
        this._dom_ctrols((info)=>{
            info.innerHTML = _value;
        })
        return this;
    }
    get html(){
        let _html = null;
        this._dom_ctrols((info)=>{
             _html = info.innerHTML;
        });
        return _html
    }
}

module.exports = dom.prototype;