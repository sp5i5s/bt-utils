var base  = require('./base')

class other extends base{

    constructor(){
		super();
	}
    // 将当前时间戳 转换成日期
    getLocalTime(_ns = Date.parse(new Date()) ){
        return new Date(parseInt(_ns)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
    }
    // 将DIV滚动条移到最后
    getScrollBottom(_info){
        _info.scrollTop( _info.height() );
    }
    // 静态分页
    setPage(_page_no, _page_size, _array) {  
        let offset = (_page_no - 1) * _page_size;  
        return (offset + _page_size >= _array.length) ? 
                _array.slice(offset, _array.length) :
                _array.slice(offset, offset + _page_size);  
    }
}

module.exports = other;