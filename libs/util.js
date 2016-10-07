'use strict'

var fs = require('fs')
var Promise = require('bluebird')

exports.readFileAsync = function (fpath, enconding) {
	return new Promise((resolve, reject) => {
		fs.readFile(fpath, enconding, function(err, content) {
			if (err) {reject(err)} else {resolve(content)}
		})
	});
}
exports.writeFileAsync = function (fpath, content) {
	return new Promise((resolve, reject) => {
		fs.writeFile(fpath, content, function(err, content) {
			if (err) {reject(err)} else {resolve(content)}
		})
	});
}