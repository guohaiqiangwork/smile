/**
 * @author jerry_sld
 * @params mui/data/callback
 * @version 1.0.0
 * @return {object}
 */
// 全局变量定义
/* http://192.168.1.17 */

/* 服务器  ：http://49.232.97.190:8080   
http://192.168.1.8
http://service.bjxrkj.com

http://192.168.0.109
http://111.231.90.86:8080
*/

//window.requserUrl = 'http://111.231.90.86:8080'; //测试环境
//window.requserUrlShard = 'http://111.231.90.86:6060/'; //分享测试
//window.requserUrlQQ =requserUrlShard + "apk/down/down.html";//qq分享路径


window.requserUrl = 'http://service.bjxrkj.com'; //正式环境
window.requserUrlShard = 'http://www.bjxrkj.com/'; //正式测试
window.requserUrlQQ =requserUrlShard + "apk/down/down.html";//qq分享路径

/**
 * 正常登录获取验证码
 */
function getCode(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/wx/send/messages", {
		timeout: 20000,
		type: 'post',
		data: dataBase,
		success: function(data) {
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
	mui.ajax(requserUrl + "/wx/send/messages", {
		timeout: 20000,
		type: 'post',
		data: dataBase,
		success: function(data) {
			if (data.code == 200) {
				callback && callback(data);
			} else {
				console.log(data.message);
			}
		},
		error: function() {
			console.log("服务异常，请稍后重试！");
		}
	});
};
/**
 * 微信确认绑定 
 */
function getWXLogin(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/wx/weixin/messages", {
		timeout: 20000,
		type: 'post',
		data: dataBase,
		success: function(data) {
			if (data.code == 200) {
				callback && callback(data);
			} else {
				console.log(data.message);
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
	//console.log("55=="+ JSON.stringify(dataBase));
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
	//console.log("昵称=="+ dataBase);
	mui.ajax(requserUrl + "/mb/find/" + dataBase, {
		timeout: 20000,
		type: 'get',
		headers: {
			'Authorization': "Bearer" + " " + plus.storage.getItem('Token'),
			'client': 'APP',
		},
		success: function(data) {
			//console.log("昵称返回参数=="+ JSON.stringify(data))
			if (data.code == 200) {
				callback && callback(data);
			} else {
				callback && callback(data);
				tipShow(data.message);
			}
		},
		error: function() {
			console.log("222服务异常，请稍后重试！");
		}
	});
};
/**
 * 获取会员余额
 */
function getUserMoney(mui, dataBase, callback) {
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
			console.log("服务异常，请稍后重试");
		}
	});
};
/**
 * 修改地址保存
 */
function getUpdateAddress(mui, dataBase, callback) {
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
			console.log("服务异常，请稍后重试！");
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
			console.log("服务异常，请稍后重试！");
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
			console.log("服务异常，请稍后重试！");
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
	console.log("dataBase111111111==" + JSON.stringify(dataBase))
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
			console.log("服务异常，请稍后重试！");
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
			if (data.code == 200) {
				callback && callback(data);
			} else {
				if (data.message == "当前用户未登录") {
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
	//alert("22="+ JSON.stringify(dataBase));
	//console.log("11="+ JSON.stringify(dataBase));
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
function getBankSave(mui, dataBase, code, callback) {
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
	mui.ajax(requserUrl + "/mb/updateMobile/" + dataBase.memberId, {
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
	mui.ajax(requserUrl + "/bank/checkBank/" + dataBase, {
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
	//console.log("11="+ JSON.stringify(dataBase))
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
			console.log("111服务异常，请稍后重试！");
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
			console.log("1111服务异常，请稍后重试！");
		}
	});
};


/* 判断是否设置 提现密码 */
function isSetPassword(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/account/isSetPassword/" + dataBase, {
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
	console.log("支付密码设置32=" + dataBase.password)
	mui.ajax(requserUrl + "/account/setPassword/" + dataBase.memberId, {
		timeout: 20000,
		type: 'get',
		data: {
			"password": dataBase.password
		},
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
			//console.log("首页标题栏分类="+ JSON.stringify(data))
			if (data.code == 200) {
				callback && callback(data);
			} else {
				callback && callback(data);
				tipShow(data.message);
			}
		},
		error: function() {
			console.log("1111服务异常，请稍后重试！");
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
			console.log("1111服务异常，请稍后重试！");
		}
	});
};

/* 首页下方商品展示 */
/* function getHomeGoodsBySort(mui, code_id, callback) {
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
}; */


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
	//console.log("11="+JSON.stringify(dataBase))
	mui.ajax(requserUrl + "/goods/getGoodsCondition", {
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
// 获取商品详情
function getCommodityD(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/goods/getGoodsDetail/" + dataBase, {
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
function getLogOut(mui, callback) {
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
	mui.ajax(requserUrl + "/shoppingCart/getNum/" + dataBase, {
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
	//console.log("添加购物车="+ JSON.stringify(dataBase));
	mui.ajax(requserUrl + "/shoppingCart/addCart", {
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


// 查询购物车列表 有效
function cartList(mui, userId, callback) {
	//console.log("555="+userId);
	mui.ajax(requserUrl + "/shoppingCart/cartList/" + userId, {
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
		error: function(data1) {
			console.log("333="+ JSON.stringify(data1));
			console.log("服务异常，请稍后重试！");
		}
	});
};


// 查询购物车列表 已失效列表
function cartListNo(mui, userId, callback) {
	mui.ajax(requserUrl + "/shoppingCart/cartListNo/" + userId, {
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
				//tipShow(data.message);
			}
		},
		error: function() {
			console.log("服务异常，请稍后重试！");
		}
	});
};

// 获取我的订单
function getMyOrder(mui, dataBase, callback) {
	//console.log("11="+ JSON.stringify(dataBase));
	mui.ajax(requserUrl + "/order/mb/list", {
		timeout: 20000,
		type: 'post',
		data: JSON.stringify(dataBase),
		headers: {
			'Authorization': "Bearer" + " " + plus.storage.getItem('Token'),
			'client': 'APP',
		},
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


//购物车数量加减接口
function setCarttNum(mui, dataBase, callback) {
	//console.log("减数量=" + JSON.stringify(dataBase));
	mui.ajax(requserUrl + "/shoppingCart/setCarttNum", {
		timeout: 20000,
		type: 'post',
		data: JSON.stringify(dataBase),
		contentType: 'application/json',
		headers: {
			'Authorization': "Bearer" + " " + plus.storage.getItem('Token'),
			'client': 'APP',
		},
		success: function(data) {
			//console.log(JSON.stringify(data));
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


/* 删除/批量删除 */
function delCarts(mui, dataBase, callback) {
	console.log("dataBase-----==" + JSON.stringify(dataBase))
	mui.ajax(requserUrl + "/shoppingCart/delCarts", {
		timeout: 20000,
		type: 'post',
		data: JSON.stringify(dataBase),
		contentType: 'application/json',
		headers: {
			'Authorization': "Bearer" + " " + plus.storage.getItem('Token'),
			'client': 'APP',
		},
		success: function(data) {
			console.log(JSON.stringify(data));
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


/* 提现到银行卡 */
function reflectBank(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/account/reflectBank", {
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


/* 去结算 */
function settle(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/order/mb/settle", {
		timeout: 20000,
		type: 'post',
		data: dataBase,
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



/* 获取订单详情 */
function getOrderDetail(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/order/mb/detail", {
		timeout: 20000,
		type: 'get',
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

/* 提交订单 */
function placeAnOrder(mui, dataBase, callback) {
	//console.log("提交订单 = " + JSON.stringify(dataBase));
	mui.ajax(requserUrl + "/order/mb/placeAnOrder", {
		timeout: 20000,
		type: 'post',
		data: JSON.stringify(dataBase),
		contentType: 'application/json',
		headers: {
			'Authorization': "Bearer" + " " + plus.storage.getItem('Token'),
			'client': 'APP',
		},
		success: function(data) {
			//console.log("返回参数="+ JSON.stringify(data));
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


/* 首页是否有未读信息 */
function hasMessage(mui, userId, callback) {
	mui.ajax(requserUrl + "/mbMessage/hasMessage/" + userId, {
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


/* 获取当前登陆人所有消息 */
function messageList(mui, userId, callback) {
	mui.ajax(requserUrl + "/mbMessage/messageList/" + userId, {
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


/* 获取消息详情 */
function MessageDetail(mui, Id, callback) {
	mui.ajax(requserUrl + "/mbMessage/MessageDetail/" + Id, {
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


// 取消支付
function getCancelPay(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/order/mb/cancelPay", {
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
// 删除订单
function getDelete(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/order/mb/delete", {
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
// 确认收货
function getConfirmReceipt(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/order/mb/confirmReceipt", {
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

// 再次购买
function getBuyAgain(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/order/mb/buyAgain", {
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

// 解绑银行卡
function getDeleteBank(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/bank/deleteBank/" + dataBase, {
		timeout: 20000,
		type: 'post',
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
// 获取历史搜索
function getSearchList(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/searchHistory/getList/" + dataBase, {
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
				// tipShow(data.message);
			}
		},
		error: function() {
			console.log("服务异常，请稍后重试！");
		}
	});
};
// 清空历史信息
function getSearchDelete(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/searchHistory/delete/" + dataBase, {
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
				// tipShow(data.message);
			}
		},
		error: function() {
			console.log("服务异常，请稍后重试！");
		}
	});
};
// 查询热门搜索
function getTopList(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/hotSearch/getTop", {
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
				// tipShow(data.message);
			}
		},
		error: function() {
			console.log("服务异常，请稍后重试！");
		}
	});
};


// 余额支付
function un_webPay(mui, dataBase, callback) {
	console.log("余额支付11="+ JSON.stringify(dataBase));
	mui.ajax(requserUrl + "/balance/pay", {
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


// 支付密码校验
function passwordCheck(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/account/passwordCheck/" + dataBase.memberId, {
		timeout: 20000,
		type: 'post',
		data: {
			password: dataBase.password
		},
		headers: {
			'Authorization': "Bearer" + " " + plus.storage.getItem('Token'),
			'client': 'APP',
		},
		success: function(data) {
			if (data.code == 200) {
				callback && callback(data);
			} else {
				callback && callback(data);
				//tipShow(data.message);
			}
		},
		error: function() {
			console.log("服务异常，请稍后重试！");
		}
	});
};

// 获取可申请订单
function getMyReturn(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/return/mb/apply", {
		timeout: 20000,
		type: 'post',
		data: JSON.stringify(dataBase),
		headers: {
			'Authorization': "Bearer" + " " + plus.storage.getItem('Token'),
			'client': 'APP',
		},
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
// 获取申请订单记录
function getApplyRecord(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/return/mb/applyRecord", {
		timeout: 20000,
		type: 'post',
		data: JSON.stringify(dataBase),
		headers: {
			'Authorization': "Bearer" + " " + plus.storage.getItem('Token'),
			'client': 'APP',
		},
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
// 退款接口
function getRefund(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/return/mb/refund", {
		timeout: 20000,
		type: 'post',
		data: JSON.stringify(dataBase),
		headers: {
			'Authorization': "Bearer" + " " + plus.storage.getItem('Token'),
			'client': 'APP',
		},
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
//判断是否可退换货/return/mb/addLogistics
function getIsLapse(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/order/mb/isLapse/" + dataBase, {
		timeout: 20000,
		type: 'post',
		headers: {
			'Authorization': "Bearer" + " " + plus.storage.getItem('Token'),
			'client': 'APP',
		},
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
//填写物流单号
function getAddLogistics(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/return/mb/addLogistics", {
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
//获取活动页图片
function getFind(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/act/find/" + dataBase, {
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
//获取好友列表
function getMyFirend(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/mb/myFirend", {
		timeout: 20000,
		type: 'post',
		data: JSON.stringify(dataBase) ,
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
//货物bar图
function getContentI(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/banner/content/" + dataBase, {
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
//查询物流信息account/freezeAmount
function getViewLogistics(mui, dataBase, callback) {
	// var dataBase ={
	// 	orderId:'1206440702800564225'
	// }
	mui.ajax(requserUrl + "/order/mb/viewLogistics", {
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
//查询冻结金额
function getFreezeAmount(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/account/freezeAmount/" + dataBase, {
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
//查询提现结果 
function getAccountDe(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/account/accountDe/" + dataBase, {
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

//查询绑定人关系
function getShareId(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/share/getShareId", {
		timeout: 20000,
		type: 'get',
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
				//tipShow(data.message);
			}
		},
		error: function() {
			console.log("服务异常，请稍后重试！");
		}
	});
};
//查询版本号  {version}
function getVersion(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/appVersionNumber/getVersion/" + dataBase, {
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


//修改当前铃声
function setPhoneRingtone(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/mb/setPhoneRingtone", {
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
				//tipShow(data.message);
			}
		},
		error: function() {
			console.log("服务异常，请稍后重试！");
		}
	});
};


//查询当前铃声状态
function getPhoneRingtone(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/mb/getPhoneRingtone/" + dataBase, {
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
			}
		},
		error: function() {
			console.log("服务异常，请稍后重试！");
		}
	});
};


//验证是否登录
function isLogin(mui, dataBase, callback) {
	mui.ajax(requserUrl + "/wx/isLogin", {
		timeout: 20000,
		type: 'get',
		headers: {
			'Authorization': "Bearer" + " " + plus.storage.getItem('Token'),
			'client': 'APP',
		},
		success: function(data) {
			console.log("111=" + JSON.stringify(data))
			callback && callback(data);
		},
		error: function() {
			console.log("服务异常，请稍后重试！");
		}
	});
};