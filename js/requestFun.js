/**
 * @author jerry_sld
 * @params mui/data/callback
 * @version 1.0.0
 * @return {object}
 */
// 全局变量定义
/* http://192.168.1.8 */

/* 服务器  ：http://49.232.97.190:8080 
http://192.168.1.8
*/
window.requserUrl = 'http://49.232.97.190:8080'; //接口请求地址 http://192.168.3.5:8087/app 


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
				callback && callback(data);
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
	console.log(requserUrl + "/account/find/" + dataBase)
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
			console.log("服务异常，请稍后重试!");
		}
	});
};

/**
 * 获取地址详情
 */
function getAddressD(mui, dataBase, callback) {
	console.log(JSON.stringify(dataBase))
	mui.ajax(requserUrl + "/address/findById/" + dataBase, {
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
			console.log("服务异常，请稍后重试！9080");
		}
	});
};
/**
 * 修改地址保存
 */
function getUpdateAddress(mui, dataBase, callback) {
	console.log(JSON.stringify(dataBase))
	mui.ajax(requserUrl + "/address/updateAddress", {
		timeout: 20000,
		type: 'post',
		data: JSON.stringify(dataBase),
		contentType: 'application/json',
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
			console.log("服务异常，请稍后重试！9080");
		}
	});
};

/**
 * 新增地址保存
 */
function getAddressSave(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/address/save", {
		timeout: 20000,
		type: 'post',
		data: JSON.stringify(dataBase),
		contentType: 'application/json',
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
			console.log("服务异常，请稍后重试！9080");
		}
	});
};

/**
 * 删除地址
 */
function deleteAddress(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/address/deleteAddress/" + dataBase, {
		timeout: 20000,
		type: 'post',
		contentType: 'application/json',
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
			console.log("服务异常，请稍后重试！9080");
		}
	});
};

/* 获取主分类列表 */
function getCategoryList(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/sort/selectSortF", {
		timeout: 20000,
		type: 'get',
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


/* 获取子分类列表 */
function getSonCategoryList(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/sort/selectSortC/" + dataBase, {
		timeout: 20000,
		type: 'get',
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
 * 实名认证
 */
function getSaveVerific(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/mb/saveVerific", {
		timeout: 20000,
		type: 'post',
		data: JSON.stringify(dataBase),
		contentType: 'application/json',
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
			console.log("服务异常，请稍后重试！9080");
		}
	});
};

/* 获取用户信息 */
function getUserList(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/mb/find/" + dataBase, {
		timeout: 20000,
		type: 'get',
		headers: {
			'Authorization': "Bearer" + " " + plus.storage.getItem('Token'),
			'client': 'APP',
		},
		success: function(data) {
			console.log(JSON.stringify(data))
			if (data.code == 200) {
				callback && callback(data);
			} else {
				if(data.message == "当前用户未登录"){
					mui.openWindow({
						url: '../login.html',
						id: 'login',
						show: {
							aniShow: "slide-in-right"
						}
					});
					return;
				}
				callback && callback(data);
				tipShow(data.message);
			}
		},
		error: function() {
			console.log("服务异常，请稍后重试！ 获取用户信息");
		}
	});
};

/* 修改用户信息 */
function updateName(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/mb/updateMember", {
		timeout: 20000,
		type: 'post',
		data: JSON.stringify(dataBase),
		contentType: 'application/json',
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
 *获取绑定银行列表
 */
function getBankFindAll(mui, dataBase, callback) {
	console.log(requserUrl + "/bank/findAll/" + dataBase)
	mui.ajax(requserUrl + "/bank/findAll/" + dataBase, {
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
			console.log("服务异常，请稍后重试获取绑定银行列表");
		}
	});
};

/**
 *绑定银行卡
 */
function getBankSave(mui, dataBase,code,callback) {
	console.log(JSON.stringify(dataBase))
	console.log(code)
	mui.ajax(requserUrl + "/bank/addBank/" + code, {
		timeout: 20000,
		type: 'post',
		data: JSON.stringify(dataBase),
		contentType: 'application/json',
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

/* 修改手机号 */
function updateMobile(mui, dataBase, callback) {
	console.log(JSON.stringify(dataBase))
	mui.ajax(requserUrl + "/mb/updateMobile/"  + dataBase.memberId, {
		timeout: 20000,
		type: 'post',
		data: dataBase,
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

/* 修改支付密码 */
function updatePassword(mui, dataBase, callback) {
	console.log("111"+JSON.stringify(dataBase))
	mui.ajax(requserUrl + "/account/updatePassword/" + dataBase.memberId, {
		timeout: 20000,
		type: 'post',
		data: dataBase,
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

/* 查询会员账户流水 */
function fallBankMassage(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/acc/flow/findAll", {
		timeout: 20000,
		type: 'post',
		data: JSON.stringify(dataBase),
		contentType: 'application/json',
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


/* 判断会员是否绑定银行卡 */
function slectCheckBank(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/bank/checkBank/"+ dataBase, {
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


/* 获取首页轮播图片 */
function getLB(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/act/list", {
		timeout: 20000,
		type: 'get',
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

/* 查询首页banner图 */
function getBanner(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/banner/find", {
		timeout: 20000,
		type: 'post',
		data: JSON.stringify(dataBase),
		contentType: 'application/json',
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


/* 判断是否设置 提现密码 */
function isSetPassword(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/account/isSetPassword/"+ dataBase, {
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


/* 支付密码设置*/
function setPassword(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/account/isSetPassword/"+ dataBase.memberId, {
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


/* 首页标题栏分类*/
function getHot(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/sort/getHot", {
		timeout: 20000,
		type: 'get',
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


/* 新品发现 */
function getNewGoods(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/goods/getNewGoods", {
		timeout: 20000,
		type: 'get',
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

/* 首页下方商品展示 */
function getHomeGoodsBySort(mui, code_id, callback) {
	mui.ajax(requserUrl + "/goods/getHomeGoodsBySort/" + code_id, {
		timeout: 20000,
		type: 'get',
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


/* 获取子分类 */
function selectSortC(mui, code_id, callback) {
	mui.ajax(requserUrl + "/sort/selectSortC/" + code_id, {
		timeout: 20000,
		type: 'get',
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


/* 获取商品列表（分类中点击二级分类跳转页面后的商品列表，在这个页搜索页调用这个接口） */
function getGoodsCondition(mui, dataBase, callback) {
	console.log("code_id11111===="+JSON.stringify(dataBase));
	mui.ajax(requserUrl + "/goods/getGoodsCondition", {
		timeout: 20000,
		type: 'post',
		data: JSON.stringify(dataBase),
		headers: {
			'Authorization': "Bearer" + " " + plus.storage.getItem('Token'),
			'client': 'APP',
		},
		success: function(data) {
			console.log("code_id3333=="+JSON.stringify(data));
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

// 获取商品详情
function getCommodityD(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/goods/getGoodsDetail/"+ dataBase, {
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

// 退出登录
function getLogOut(mui,callback) {
	mui.ajax(requserUrl + "/wx/logout", {
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

// 获取详情购物车数量
function getShoppingCart(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/shoppingCart/getNum/"+ dataBase, {
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
// 添加购物车
function addShoppingCart(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/shoppingCart/addCart", {
		timeout: 20000,
		type: 'post',
		data:dataBase,
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
