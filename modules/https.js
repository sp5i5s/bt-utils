/*
依赖axios插件
*/

var axios = require('axios')
var base  = require('./base')
var qs = require('qs');

class https extends base{
    constructor(){
        super();
        this.init();
    }
    // init
    init(){
        
    }
    // get类型下的通用方法
    _get(){
        let arrs = Array.from(arguments);
        let args,fn = new Function('console.log("error : https缺少回调方法");');
        for(let arr of arrs){
            if(typeof arr === 'object'){
                args = arr;
            }
            else if(typeof arr === 'string'){
                args = { url : arr };
            }
            else if(typeof arr === 'function'){
                fn = arr;
            }
        }

        axios[this.type](args.url).then((result)=>{
            return fn(result);
        });
    }
    // header头参数
    get conf(){
        return {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            };
    }
    // get实例方法
    get(){
        this.type = 'get';
        this._get.apply(this,arguments);
    }
    // delete实例方法
    delete(){
        this.type = 'delete';
        this._get.apply(this,arguments);
    }
    // post类型下的通用方法
    _post(_args,_fn){
        axios[this.type](_args.url,qs.stringify(_args.data),this.conf).then((result)=>{
            return _fn ? _fn(result) : result;
        });
    }
    // post实例方法
    post(){
        this.type = 'post';
        this._post.apply(this,arguments);
    }
    // put实例方法
    put(){
        this.type = 'put';
        this._post.apply(this,arguments);
    }
    // 页面跳转
    go(_url){
        location.href = _url;
    }
    // 刷新当前页面
    refresh(){
        location.reload()
    }
}
module.exports = https.prototype