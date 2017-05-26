var https = require('./modules/https');
var dom = require('./modules/dom');
var msg = require('./modules/msg');
var other = require('./modules/other');
var array = require('./modules/array');
var string = require('./modules/string');

var log = function(val){
	console.log("%O",val);
}

var utils = function(){	}

utils.prototype = {
	constructor : utils,
	https : new https(),
	dom : new dom(),
	msg : new msg(),
	array : new array(),
	string : new string(),
	other : new other(),
}

~(function(W){

	W.__ = new utils();

})(window);


// __.https.delete('http://localhost:9087/api.php/basics/base/get_grade/?school_id=122&district_id=null',(result)=>{
// 	log(result);
// })
// var args = { url : 'http://localhost:9087/api.php/basics/base/get_school/',data : { safe_school_id : 122}};
// __.https.post(args,function(result){
// 	log(result);
// 	var a = 111;
// });
//log(__.other.getLocalTime());

log(__);

// var list = [
// 	{name : 'brandon'},{name : 'tx'},{name : 'tony'}
// ]

// log(__.array.getInfo(list,'name','tony'))

let s = 'brandon fang';
log(s.empty());