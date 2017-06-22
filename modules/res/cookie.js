var cookie = {  
    get : function(name){  
        var cv = document.cookie.split("; ");//使用"; "分割Cookie  
        var cva = [], temp;  
        /*循环的得到Cookie名称与值*/  
        for(let i=0; i<cv.length; i++){  
            temp = cv[i].split("=");//用"="分割Cookie的名称与值  
            cva[temp[0]] = unescape(temp[1]);  
        }  
        if(name) return cva[name];//如果有name则输出这个name的Cookie值  
        else return cva;//如果没有name则输出以名称为key，值为Value的数组  
    },  
    set : function(name, value, expires, path, domain, secure){  
        if(!name || !value) return false;//如果没有name和value则返回false  
        if(name == "" || value == "") return false;//如果name和value为空则返回false  
        /*对于过期时间的处理*/  
        if(expires){  
            /*如果是数字则换算成GMT时间，当前时间加上以秒为单位的expires*/  
            if(/^[0-9]+$/.test(expires)){  
                var today = new Date();  
                expires = new Date(today.getTime()+expires*1000).toGMTString();  
            /*判断expires格式是否正确，不正确则赋值为undefined*/  
            }
        }  
        /*合并cookie的相关值*/  
        var cv = name+"="+escape(value)+";"  
               + ((expires) ? " expires="+expires+";" : "")  
               + ((path) ? "path="+path+";" : "")  
               + ((domain) ? "domain="+domain+";" : "")  
               + ((secure && secure != 0) ? "secure" : "");  
        /*判断Cookie总长度是否大于4K*/  
        if(cv.length < 4096){  
            document.cookie = cv;//写入cookie  
            return true;  
        }else{  
            return false;  
        }  
    },  
    remove : function(name, path, domain){  
        if(!name) return false;//如果没有name则返回false  
        if(name == "") return false;//如果name为空则返回false  
        if(!this.get(name)) return false;//如果要删除的name值不存在则返回false  
        /*合并Cookie的相关值*/  
        document.cookie = name+"=;"  
                          + ((path) ? "path="+path+";" : "")  
                          + ((domain) ? "domain="+domain+";" : "")  
                          + "expires=Thu, 01-Jan-1970 00:00:01 GMT;";  
        return true;  
    }  
}

module.exports = cookie;