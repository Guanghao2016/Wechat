'use strict'

var Koa = require('koa')
var wechat = require('./wechat_g/g')
var path = require('path')
var util = require('./libs/util')
var config = require('./wechat_config')
var weixin = require('./weixin')
var wechat_file = path.join(__dirname, './config/wechat.txt')

var app = new Koa()

app.use(wechat(config.wechat, weixin.reply))

app.listen(1234)
console.log('listening:1234')