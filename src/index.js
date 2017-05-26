/*
    常用JS操作库包括
    create by brandon fang 2017-05-26
*/

var base = require('./modules/base');
var https = require('./modules/https');
var dom = require('./modules/dom');
var msg = require('./modules/msg');
var other = require('./modules/other');
var array = require('./modules/array');
var string = require('./modules/string');
var math = require('./modules/math');


base.prototype = {
	constructor : base,
	https : https,
	dom : dom,
	msg : msg,
	array : array,
	string : string,
	other : other,
	math : math,
	log : base.prototype.log,
}

~(function(W){

	W.bt = new base();

})(window);

// bt.https.delete('http://localhost:9087/api.php/basics/base/get_grade/?school_id=122&district_id=null',(result)=>{
// 	log(result);
// })
// var args = { url : 'http://localhost:9087/api.php/basics/base/get_school/',data : { safe_school_id : 122}};
// bt.https.post(args,function(result){
// 	log(result);
// 	var a = 111;
// });
// log(bt.other.getLocalTime());
// log(bt);
//bt.math.max();

// var list = [
// 	{name : 'brandon'},{name : 'tx'},{name : 'tony'}
// ]
// log(bt.array.getInfo(list,'name','tony'))

// let s = '笔是';
// log(s.is_chinese());