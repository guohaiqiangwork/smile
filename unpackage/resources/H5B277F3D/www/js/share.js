function shareMessageShare(share, ex, shareJson, userId, lineEndId) {
		var shareTitle = shareJson.title; //分享标题
		var shareContent = shareJson.desc; //分享简介
		// console.log("分享简介："+shareContent);
		if (shareContent.length > 30) {
			var shareContentReg = shareContent.substr(0, 30) + "...";
		} else {
			var shareContentReg = shareContent;
		}
		var msg = {
			extra: {
				scene: ex
			}
		};
		if (lineEndId && lineEndId[0] != 'lineEnd') {
			msg.href = "http://49.232.97.190:8080" + "/web/appShare/travalShare?orderId=" + lineEndId[0] + ""; //分享地址
		} else {
			msg.href = "http://49.232.97.190:8080" + "/web/appShare/goRegister?shareId=" + userId + ""; //分享地址
		}
		msg.title = shareTitle;
		msg.content = shareContentReg;
		msg.thumbs = ["../img/share_logo.png"]; //链接图片1张
		share.send(msg, function() {
			// mui.toast("分享成功");
			// console.log(JSON.stringify(share));
			console.log("分享到\"" + share.description + "\"成功!");
			// $$.toast("分享到\"" + share.description + "\"成功！ ");
		}, function(e) {
			// mui.toast("分享到\"" + share.description + "\"失败: " + e.code + " - " + e.message);
			mui.toast("请查看是否安装微信并且已登录")
		});
	}
	// qq 分享
	function shareShare(srv, msg, button) {
		// console.log('第一项' + JSON.stringify(srv));
		// console.log('第ER项' + JSON.stringify(srv));
		// console.log('第san项' + JSON.stringify(srv));
		tipShow('分享操作：');
		if (!srv) {
			outLine('无效的分享服务！');
			return;
		}
		button && (msg.extra = button.extra);
		// 发送分享
		if (srv.authenticated) {
			tipShow('---已授权---');
			doShare(srv, msg);
		} else {
			tipShow('---未授权---');
			srv.authorize(function() {
				doShare(srv, msg);
			}, function(e) {
				tipShow('认证授权失败：' + JSON.stringify(e));
			});
		}
	}
	// 发送分享
	function doShare(srv, msg) {
		tipShow(JSON.stringify(msg));
		srv.send(msg, function() {
			tipShow('分享到"' + srv.description + '"成功！');
			mui.fire(plus.webview.getWebviewById("index.html"));
			setTimeout(function() {
				toCurrentPage();
			}, 5000);
		}, function(e) {
			tipShow('分享到"' + srv.description + '"失败: ' + JSON.stringify(e));
		});
	}
