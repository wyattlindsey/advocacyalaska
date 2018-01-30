'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var PORT = process.env.PORT || 5000;

express().use(express.static(path.join(__dirname, 'dist'))).use(favicon(path.join(__dirname, 'dist', 'favicon.ico'))).get('/', function (req, res) {
  return res.render('dist');
}).listen(PORT, function () {
  return console.log('Listening on ' + PORT);
});
//# sourceMappingURL=index.js.map