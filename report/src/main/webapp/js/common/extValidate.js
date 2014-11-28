/**
 * 扩展验证规则
 */
$.extend($.fn.validatebox.defaults.rules, {  
    /*必须和某个字段相等*/
    equalTo: {
        validator:function(value,param){
            return $(param[0]).val() == value;
        },
        message:'字段不匹配',
    },
	minLength : {
		validator : function(value, param) {
			return value.length >= param[0];
		},
		message : '最少输入 {0} 个字符 .',
	},
	eqLength : {
		validator : function(value, param) {
			return value.length == param[0];
		},
		message : '请输入 {0} 字符 .',
	},
	phone : {// 验证电话号码
		validator : function(value) {
			return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
		},
		message : '格式不正确,请使用下面格式:020-88888888',
	},
	mobile : {// 验证手机号码
		validator : function(value) {
			return /^1\d{10}(、1\d{10})*$/i.test(value);
		},
		message : '手机号码格式不正确(正确格式如：13450774432 多个请用{、}分开)',
	},
	zip : {// 验证邮政编码
		validator : function(value) {
			return /^[1-9]\d{5}$/i.test(value);
		},
		message : '邮政编码格式不正确',
	},
	idcard : {// 验证身份证
		validator : function(value) {
			return /^\d{15}(\d{2}[A-Za-z0-9])?$/i.test(value);
			//return idCard(value);
		},
		message : '身份证号码格式不正确',
	},
	faxno : {// 验证传真
		validator : function(value) {
			// return /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[
			// ]){1,12})+$/i.test(value);
			return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
		},
		message : '传真号码不正确',
	},
	email : {
		validator : function(value) {
			return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
					.test(value);
		},
		message : '请输入有效的电子邮件账号(例：abc@126.com)',
	},
    qq : {// 验证QQ,从10000开始 
        validator : function(value) { 
            return /^[1-9]\d{4,12}$/i.test(value); 
        }, 
        message : 'QQ号码格式不正确,5到12位',
    },
    password : {//验证密码
    	validator : function(value){
    		return /^[0-9a-zA-Z_]{4,16}$/i.test(value);
    	},
    	message : '密码必须是4到16的字母数字下划线的组合',
    },
    longitude:{
    	validator:function(value){
    		return /^[\-\+]?(0?\d{1,2}\.\d{1,5}|1[0-7]?\d{1}\.\d{1,10}|180\.0{1,10})$/i.test(value);
    	},
    	message:'请输入有效经度格式{-180.0～+180.0(整数部分为0～180，输入1到10位小数)}',
    },
    latitude:{
    	validator:function(value){
    		return /^[\-\+]?([0-8]?\d{1}\.\d{1,10}|90\.0{1,10})$/i.test(value);
    	},
    	message:'请输入有效纬度格式{-90.0～+90.0(整数部分为0～90，输入1到10位小数)}',
    },
    number: {
    	validator: function (value, param) {
    	return /^\d+$/i.test(value);
    	},
    	message: '请输入数字'
   }, 
   referenceNo:{
	   validator : function(value, param) {
			return value.length == param[0];
		},
		message : '必须输入 {0} 位 .',
   },
   terminalNo : {
		validator : function(value, param) {
			return value.length == param[0];
		},
		message : '必须输入 {0} 位 .',
   },
   price : {
	   validator : function(value, param){
		   return /^\d{1,10}(\.\d{1,2})?$/i.test(value);
	   },
	   message : '请输入合法价格 . {保留两位小数}',
   },
   weight : {
	   validator : function(value, param){
		   return /^\d{1,10}(\.\d{1,5})?$/i.test(value);
	   },
	   message : '请输入合法重量 . ',
   }
   
});
