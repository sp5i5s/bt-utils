var p = String.prototype;

// 自定义Join，将数组中的指定属性拼接返回[{name : 'brandon'},{name : 'tony'},{name : 'tony'}]
p.empty = function(){
  if (this.toString().trim().replace(/(^s*)|(s*$)/g, "").length == 0 ){
        return false;
    }
    return true;
};

class string{
    // 在string中返回指定value的info
    getInfo(string,key,value){
        var info = string.find(function(c, index, arr){
          return c[key] == value;
        })
        return info || null;
    }
}

module.exports = string