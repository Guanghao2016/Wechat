'use strict'

var Koa = require('koa')
var wechat = require('./wechat_g/g')
var path = require('path')
var util = require('./libs/util')
var wechat_file = path.join(__dirname, './config/wechat.txt')

var config = require('./wechat_config')

config.wechat.getAccessToken = function () {
	return util.readFileAsync(wechat_file)
}
config.wechat.saveAccessToken = function (data) {
	data = JSON.stringify(data)
	return util.writeFileAsync(wechat_file, data)
}


var app = new Koa()

app.use(wechat(config.wechat))

app.listen(1234)
console.log('listening:1234')