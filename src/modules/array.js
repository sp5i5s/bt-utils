var p = Array.prototype;

// 自定义Join，将数组中的指定属性拼接返回[{name : 'brandon'},{name : 'tony'},{name : 'tony'}]
p._join = function(filed){
  let str = '';
  this.forEach((c,i)=>{
    str += c[filed] + ',';
  })
  return str.substring(0,str.length - 1);
};

// 过滤数组当中重复数据 ['brandon','brandon','tony']
p._distinct = function () {    
  var newArr = [],obj = {};    
  for(var i=0, len = this.length; i < len; i++){    
    if(!obj[typeof(this[i]) + this[i]]){    
      newArr.push(this[i]);    
      obj[typeof(this[i]) + this[i]] = 'new';    
    }    
  }    
  return newArr;  
}

class array{
    // 在Array中返回指定value的info
    getInfo(array,key,value){
        var info = array.find(function(c, index, arr){
          return c[key] == value;
        })
        return info || null;
    }
}

module.exports = array