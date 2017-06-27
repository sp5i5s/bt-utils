/*
    常用JS操作库包括
    create by brandon fang 2017-05-26
*/
var base = require('./modules/base');
var https = require('./modules/https');
var dom = require('./modules/dom');
var msg = require('./modules/msg');
var tool = require('./modules/tool');
var _array = require('./modules/array');
var _string = require('./modules/string');
var _object = require('./modules/object');
var _event = require('./modules/event');
var _uri = require('./modules/uri');
var _window = require('./modules/window');
var _cookie = require('./modules/res/cookie');

let container = function(){};
container.prototype = {
	constructor : base,
	https : https,
	dom : dom,
	msg : msg,
	array : _array,
	string : _string,
	tool : tool,
	object : _object,
	event : _event,
	uri : _uri,
	window : _window,
	cookie : _cookie,
	log : base.prototype.log,
}

~function(W){
	W.bt = new container();
}(window);