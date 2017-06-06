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
var object = require('./modules/object');
var event = require('./modules/event');
var uri = require('./modules/uri');
var _window = require('./modules/window');

base.prototype = {
	constructor : base,
	https : https,
	dom : dom,
	msg : msg,
	array : array,
	string : string,
	other : other,
	object : object,
	event : event,
	uri : uri,
	window : _window,
	log : base.prototype.log,
}

~(function(W){

	W.bt = new base();

})(window);


// 使用说明
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

// let s = '18021071789';
// log(s.is_mobile());

var obj = {
    name : 'brandon',
	tel : '180',
	address : {
		city : 'sh',
		book : {
			sex : 'c#'
		}
	}	
}
//bt.log(bt.object.getInfo(obj,'sex11'));
// var obj2 = bt.object.clone(obj);
// obj2.name = 'jack';
// obj2.address.city = 'ah';
// bt.log(obj2);
//var s = " 中华人民共和国人 ";

let arr = [
	{name : 'brandon',sex : 33},
	{name : 'tony',sex : 34},
	{name : 'jone',sex :35},
];
bt.log(bt.array.getInfo(arr,'name','jone'));

bt.log(['a', 'b', 'c'].fill('bbb',1));