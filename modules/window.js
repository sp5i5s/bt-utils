var base  = require('./base')

class _window extends base{

    constructor(){
		super();
	}
    // 判断是否是手持设置
    isMobile(){
        return (/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase()));  
    }
    // 获取页面宽度
    get width(){
        var d = document, a = d.compatMode == "BackCompat"  
                        ? d.body  
                        : d.documentElement;  
        return a.clientWidth;  
    }
    // 获取页面高度
    get height(){
        var d = document, a = d.compatMode == "BackCompat"  
                        ? d.body  
                        : d.documentElement;  
        return a.clientHeight;   
    }
}

module.exports = _window.prototype;