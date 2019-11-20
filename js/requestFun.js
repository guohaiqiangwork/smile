/**
 * @author jerry_sld
 * @params mui/data/callback
 * @version 1.0.0
 * @return {object}
 */
// 全局变量定义
window.requserUrl = 'http://192.168.1.160'; //接口请求地址 http://192.168.3.5:8087/app 


/**
 * 正常登录获取验证码
 */
function getCode(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/wx/send/messages", {
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
	mui.ajax(requserUrl + "/wx/weixin/messages", {
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
	mui.ajax(requserUrl + "/wx/send/login", {
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
 * 获取会员昵称等
 */
function getUserDetail(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/mb/find/" + dataBase, {
		timeout: 20000,
		type: 'get',
		headers: {
			'Authorization': "Bearer" + " " + plus.storage.getItem('Token'),
			'client': 'APP',
		},
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
 * 获取会员余额
 */
function getUserMoney(mui, dataBase, callback) {
	console.log(requserUrl + "account/find/" + dataBase)
	mui.ajax(requserUrl + "/account/find/" + dataBase, {
		timeout: 20000,
		type: 'get',
		headers: {
			'Authorization': "Bearer" + " " + plus.storage.getItem('Token'),
			'client': 'APP',
		},
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
 * 获取地址列表
 */
function getUserAddress(mui, dataBase, callback) {
	console.log(requserUrl + "/account/find/" + dataBase)
	mui.ajax(requserUrl + "/address/findAll/" + dataBase, {
		timeout: 20000,
		type: 'get',
		headers: {
			'Authorization': "Bearer" + " " + plus.storage.getItem('Token'),
			'client': 'APP',
		},
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



