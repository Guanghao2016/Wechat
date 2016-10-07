'use strict'

var xml2js = require('xml2js')
var Promise = require('bluebird')

exports.parseXMLAsync = function (xml) {
	return new Promise((resolve, reject) => {
		xml2js.parseString(xml, {trim: true}, function(err, content) {
			if (err) {reject(err)} else {resolve(content)}
		})
	});
}

function formateMessage(result) {
	var message = {}

	if (typeof result === 'object') {
		var keys = Object.keys(result)

		for (var i = 0; i < keys.length; i++) {
			var item = result[keys[i]]
			var key = keys[i]

			if (!(item instanceof Array) || item.length===0) {
				continue
			}
			if (item.length === 1) {
				var val = item[0]

				if (typeof val === 'object') {
					message[key] = formateMessage(val)
				}
				else {
					message[key] = (val || '').trim()
				}
			}
			else {
				message[key] = []

				for (var j = 0;j<item.length; j++ ) {
					message[key].push(formateMessage(item[j]))
				}
			}
		}
	}

	return message
}

exports.formateMessage = formateMessage