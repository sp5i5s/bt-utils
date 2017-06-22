/*
    常用JS操作库包括
    create by brandon fang 2017-05-26
*/
import base from './modules/base';
import https from './modules/https';
import dom from './modules/dom';
import msg from './modules/msg';
import tool from './modules/tool';
import _array from './modules/array'
import _string from './modules/string';
import _object from './modules/object';
import _event from './modules/event';
import _uri from './modules/uri';
import _window from './modules/window';
import _cookie from './modules/res/cookie';

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