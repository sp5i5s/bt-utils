var math = function(){}

let p = math.prototype;
p.max = function(){
    alert('max');
}

p.min = function(){
    alert('min');
}

module.exports = p;