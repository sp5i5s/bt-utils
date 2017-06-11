/*
    常用JS操作库包括
    create by brandon fang 2017-05-26
*/
var base = require('./modules/base');
var https = require('./modules/https');
var dom = require('./modules/dom');
var msg = require('./modules/msg');
var tool = require('./modules/tool');
var array = require('./modules/array');
var string = require('./modules/string');
var object = require('./modules/object');
var event = require('./modules/event');
var uri = require('./modules/uri');
var _window = require('./modules/window');
var cookie = require('./modules/res/cookie');

base.prototype = {
	constructor : base,
	https : https,
	dom : dom,
	msg : msg,
	array : array,
	string : string,
	tool : tool,
	object : object,
	event : event,
	uri : uri,
	window : _window,
	cookie : cookie,
	log : base.prototype.log,
}

~(function(W){

	W.bt = new base();;

})(window);