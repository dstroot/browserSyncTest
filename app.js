/**
 * World's simplest express server
 * - used to serve index.html from /public
 */

var express = require('express');
var serveStatic = require('serve-static');
var app = express();
app.use(serveStatic(__dirname + '/public'));
app.listen(3000);
// console.log('App listening on port 3000');