/**
 * @author jerry_sld
 * @params mui/data/callback
 * @version 1.0.0
 * @return {object}
 */
// 全局变量定义
window.imgUrl = 'http://192.168.3.5:8080/web/sys/attachment/showPicture?attachmentId=';
window.requserUrl = 'http://192.168.3.5:8087/app';//接口请求地址 http://192.168.3.5:8087/app 
window.requserUpImg = 'http://192.168.3.5:8080/web/sys/attachment/saveUploadFile'; //上传图片地址
window.requserShare = 'http://192.168.3.5:8080';//分享接口地址
window.requserTempUpImg = 'http://192.168.3.5:8080/web/sys/attachment/showTempPic?attachmentId='; //临时图片显示地址
window.requserFiexdUpImg = 'http://192.168.3.5/:8080/web/sys/attachment/showPicture?attachmentId='; //永久图片显示地址
window.requesrWebSocket = 'ws://192.168.3.5:8087/app/websocket?userId='; //websocket实时通讯连接地址
 


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
		success: function (data) {
			if (parseInt(data.code) == 0) {
				callback && callback(data.attributes.sessionId, data.attributes.userId);
			} else {
				switch (data.msg) {
					case "smsCode_error":
						tipShow("验证码错误！");
						callback&&callback(500);
						break;
					case "smsCode_expire":
						tipShow("验证码过期！");
						callback&&callback(500);
						break;
					case "save_user_fail":
						tipShow("用户异常！");
						callback&&callback(500);
						break;
					case "login_fail":
						tipShow("用户异常！");
						callback&&callback(500);
						break;
					default:
						tipShow("未知错误！");
				}
			}
		},
		error: function () {
			console.log("服务异常，请稍后重试！");
		},
		complete: function () {
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
		success: function (data) {
			callback && callback(data);
		},
		error: function (e) {
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
		success: function (data) {
			callback && callback(data)
		},
		error: function (error) {
			console.log("服务异常，请稍后重试！");
		}
	});
};







