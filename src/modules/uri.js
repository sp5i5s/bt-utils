var base  = require('./base')

class uri extends base{

    constructor(){
		super();
	}
    // 获取当前URI或是根据URI的所有query
    get(url = null){
        if(url == null)
            return location.href;
        return this.getQuery(url);
    }
    getQuery(url){
        var args = {};
        var query = decodeURI(url);
        var pairs = args.host = query;
        var w = query.split('?');

        if(w.length > 1){
            var pairs = w[1].split("&");
            args.host = w[0];
        }
        
        for (var i = 0; i < pairs.length; i++) {  
            var pos = pairs[i].indexOf('=');  
            if (pos == -1) continue;
            var argname = pairs[i].substring(0, pos);
            var value = pairs[i].substring(pos + 1);
            args[argname] = decodeURI(value);  
        }
        return args;
    }
}

module.exports = uri.prototype;