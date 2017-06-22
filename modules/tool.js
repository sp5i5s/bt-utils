var base  = require('./base')

class tool extends base{

    constructor(){
		super();
	}
    // 将当前时间戳 转换成日期
    getLocalTime(_ns = Date.parse(new Date()) ){
        return new Date(parseInt(_ns)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
    }
    // 静态分页
    setPage(_array,_page_no, _page_size) {  
        let offset = (_page_no - 1) * _page_size;  
        return (offset + _page_size >= _array.length) ? 
                _array.slice(offset, _array.length) :
                _array.slice(offset, offset + _page_size);  
    }
    // 获取一个随机数
    get uniqueId() {  
        var a = Math.random, b = parseInt;  
        return Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a());  
    }
    
}

module.exports = tool.prototype;