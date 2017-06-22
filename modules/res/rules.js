// 基础规则类

var rules = {
	// 是否为空
	empty : function(value){
		if(!value){
			return true;
		}
		if (value.toString().trim().replace(/(^s*)|(s*$)/g, "").length == 0 ){
        	return true;
		}
		return false;
	},
	// 是否为数字
	number : function(value){
		let patter = /^[\d/.]{1,}$/;
		return ! isNaN(value) && patter.test(value);
	},
	// 就否是手机号
	mobile : function(value){
		let patter = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		return patter.test(value);
	},
	// 是否是邮箱地址
	email : function(value){
		let patter = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		return patter.test(value);
	},
	// 是否是电话号码
	telphone : function(value){
		let patter = /\d{3}-\d{8}|\d{4}-\d{7}/;
		return patter.test(value);
	},
	// 是否是身份证号
	card : function(value){
		let patter = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
		return patter.test(value);
	},
	// 用户名是否安全强度
	user_safe : function(value){
		let patter = /^[a-zA-Z][a-zA-Z0-9_]{4,10}$/;
		return patter.test(value);
	},
	// 是否是中文
	chinese : function(value){
		let patter = /[\u4e00-\u9fa5]{2,10}/;
		return patter.test(value);
	},
};

export default rules;