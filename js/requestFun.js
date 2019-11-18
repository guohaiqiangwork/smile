/**
 * @author jerry_sld
 * @params mui/data/callback
 * @version 1.0.0
 * @return {object}
 */
// 全局变量定义
window.requserUrl = 'http://192.168.1.169/'; //接口请求地址 http://192.168.3.5:8087/app 


/**
 * 正常登录获取验证码
 */
function getCode(mui, dataBase, callback) {
	console.log(JSON.stringify(dataBase))
	console.log(requserUrl + "wx/send/messages")
	mui.ajax(requserUrl + "wx/send/messages", {
		timeout: 20000,
		type: 'post',
		data: dataBase,
		success: function(data) {
			console.log(JSON.stringify(data))
			if (data.code == 200) {
				callback && callback(data);
			} else {
				tipShow(data.message);
			}
		},
		error: function() {
			console.log("服务异常，请稍后重试！");
		}
	});
};

/**
 * 微信绑定获取验证码
 */
function getWXCode(mui, dataBase, callback) {
	console.log(JSON.stringify(dataBase))
	mui.ajax(requserUrl + "wx/weixin/messages", {
		timeout: 20000,
		type: 'post',
		data: dataBase,
		success: function(data) {
			console.log(JSON.stringify(data))
			if (data.code == 200) {
				callback && callback(data);
			} else {
				tipShow(data.message);
			}
		},
		error: function() {
			console.log("服务异常，请稍后重试！");
		}
	});
};
/**
 * 去登录
 */
function gotoLogin(mui, dataBase, callback) {
	console.log(JSON.stringify(dataBase) + '登录')
	mui.ajax(requserUrl + "wx/send/login", {
		timeout: 20000,
		type: 'post',
		data: dataBase,
		success: function(data) {
			if (data.code == 200) {
				callback && callback(data);
			} else {
				callback && callback(data);
				tipShow(data.message);
			}
		},
		error: function() {
			console.log("服务异常，请稍后重试！");
		}
	});
};
/**
 * 获取会员信息
 */
function getUserDetail(mui, dataBase, callback) {
	// var getCodeWati = plus.nativeUI.showWaiting("登录中...");
	http://192.168.1.12/mb/find/{id
	console.log(JSON.stringify(dataBase) + '登录')
	console.log(requserUrl + "mb/find/" + dataBase)
	console.log(plus.storage.getItem('Token') + 'to0ok')
	mui.ajax(requserUrl + "mb/find/" + dataBase, {
		timeout: 20000,
		type: 'get',
		headers: {
			'AuthorizationKey': plus.storage.getItem('Token'),
			 'client' :'APP'
		},
		success: function(data) {
			console.log(JSON.stringify(data) + '返回问题')
			if (data.code == 200) {
				callback && callback(data);
			} else {
				callback && callback(data);
				tipShow(data.message);
			}
		},
		error: function() {
			console.log("服务异常，请稍后重试！");
		}
	});
};
/** 
 * 验证码登录
 * @param {string} phone | smsCode 
 * @return {sessionId}
 */
function login(mui, dataBase, callback) {
	console.log(JSON.stringify(dataBase));
	mui.ajax(requserUrl + "/user/login", {
		timeout: 20000,
		type: 'post',
		data: dataBase,
		success: function(data) {
			if (parseInt(data.code) == 0) {
				callback && callback(data.attributes.sessionId, data.attributes.userId);
			} else {
				switch (data.msg) {
					case "smsCode_error":
						tipShow("验证码错误！");
						callback && callback(500);
						break;
					case "smsCode_expire":
						tipShow("验证码过期！");
						callback && callback(500);
						break;
					case "save_user_fail":
						tipShow("用户异常！");
						callback && callback(500);
						break;
					case "login_fail":
						tipShow("用户异常！");
						callback && callback(500);
						break;
					default:
						tipShow("未知错误！");
				}
			}
		},
		error: function() {
			console.log("服务异常，请稍后重试！");
		},
		complete: function() {
			// console.log("完成");
		}
	});
};

/**
 * 获取客户端订单详情
 *
 * */
function getUserOrderDetails($$, keyword, sessionId, callback) {
	$$.ajax(requserUrl + '/userOrder/getUserOrderDetails', {
		timeout: 20000,
		type: 'post',
		data: keyword,
		headers: {
			'AuthorizationKey': sessionId
		},
		success: function(data) {
			callback && callback(data);
		},
		error: function(e) {
			console.log("服务异常，请稍后重试！");
		}
	})

};
/**乘客结束同乘
 * @param {Object} mui
 * @param {Object} UserSessionID
 * @param {Object} id                  
 */
function endFinishUserOrder(mui, UserSessionID, callback) {
	mui.ajax(requserUrl + '/endOrder/finishUserOrder', {
		timeout: 20000,
		type: 'post',
		headers: {
			'AuthorizationKey': UserSessionID,
		},
		success: function(data) {
			callback && callback(data)
		},
		error: function(error) {
			console.log("服务异常，请稍后重试！");
		}
	});
};
