'use strict'

exports.reply = function* (next) {
	var message = this.weixin

	if (message.MsgType === 'event') {
		if (message.Event === 'subscribe') {
			if(message.EventKey) {
				console.log('扫描二维码：' + message.EventKey + ' ' + message.ticket)
			}

			this.body = '欢迎订阅，希望你永远保持好奇心'
		}
		else if (message.Event === 'unsubscribe') {
			console.log('取消关注')
			this.body = ''
		}
	}
	else if(message.Event === 'LOACTION'){ 
		this.body = '地理位置： ' + message.Latitude + '/' +message.Longitude + '-' + message.Precision
	}
	else if (message.Event === 'CLICK') {
		this.body = '您点击了菜单：  ' + message.EventKey
	}
	else if (message.Event === 'SCAN') {
		console.log('关注后扫二维码' + message.EventKey + ' ' + message.Ticket)
		this.body = '扫了一下~~'
	}
	else if (message.Event === 'VIEW') {
		this.body = '点击了菜单中的链接： ' + message.EventKey
	}
	else if (message.MsgType === 'text') {
		var content = message.Content
		var reply = '你说的是： ' + message.Content + '~~'
		this.body = reply
	}
	yield next
}